import mongoose from 'mongoose';
import createHttpError from 'http-errors';
import {UserModel} from "../user/User.model";
import {ProductModel} from "../product/Product.model";
import {OrderModel} from "./Order.model";


interface CreateOrderParams {
    userId: string;
    productId: string;
    quantity: number;
}

export const createOrderService = async ({userId, productId, quantity}: CreateOrderParams) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    const user = await UserModel.findById(userId).session(session);

    if (!user) throw createHttpError(404, 'User not found');

    if (parseFloat(user.balance.toString()) < 0) throw createHttpError(400, 'Insufficient balance');

    const product = await ProductModel.findById(productId).session(session);

    if (!product) throw createHttpError(404, 'Product not found');

    if (product.stock < quantity) throw createHttpError(400, 'Not enough stock');

    const totalPrice = Number(product.price) * quantity;

    if (parseFloat(user.balance.toString()) < totalPrice) throw createHttpError(400, 'User has insufficient balance');

    product.stock -= quantity;
    user.balance = mongoose.Types.Decimal128.fromString((parseFloat(user.balance.toString()) - totalPrice).toFixed(2));

    await product.save();
    await user.save();

    const order = await OrderModel.create({
        userId: user._id,
        productId: product._id,
        quantity,
        totalPrice,
    });

    await session.commitTransaction();
    await session.endSession();

    return order;
};