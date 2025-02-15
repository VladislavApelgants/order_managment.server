import mongoose, { Schema, model, Types, Document } from "mongoose";

export interface IOrder extends Document {
  userId: Types.ObjectId;
  productId: Types.ObjectId;
  quantity: number;
  totalPrice: mongoose.Types.Decimal128;
  createdAt: Date;
}

const orderSchema = new Schema<IOrder>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Schema.Types.Decimal128,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey:false,
  }
);

orderSchema.set('toJSON', {
  transform: (_doc, ret) => {
    if (ret.totalPrice && ret.totalPrice instanceof mongoose.Types.Decimal128) {
      ret.totalPrice = parseFloat(ret.totalPrice.toString());
    }
    return ret;
  },
});

export const OrderModel = model<IOrder>("Order", orderSchema);
