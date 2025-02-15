import { type Document } from 'mongoose';
import type mongoose from 'mongoose';
import { model, Schema } from 'mongoose';

interface IProduct extends Document {
  name: string;
  price: mongoose.Types.Decimal128;
  stock: number;
}

const ProductSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Schema.Types.Decimal128,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const ProductModel = model<IProduct>('Product', ProductSchema);
