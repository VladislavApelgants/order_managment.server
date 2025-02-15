import type mongoose from 'mongoose';

export interface CreateOrderBody {
  _id: string;
  userId: string;
  productId: string;
  quantity: number;
}

export interface CreateOrderRes {
  _id: string;
  userId: mongoose.Types.ObjectId;
  productId: mongoose.Types.ObjectId;
  quantity: number;
  totalPrice: number;
}

export interface RetrieveUsersOrdersParams {
  userId: string;
}
