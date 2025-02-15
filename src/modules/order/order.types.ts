import mongoose from "mongoose";

export interface CreateOrderBody {
    userId: string;
    productId: string;
    quantity: number;
}

export interface CreateOrderRes {
    userId: mongoose.Types.ObjectId;
    productId: mongoose.Types.ObjectId;
    quantity: number;
    totalPrice: number;
}