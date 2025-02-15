import mongoose, { type Document, model, Schema } from 'mongoose';

export interface IProduct extends Document {
  _id: string;
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
ProductSchema.set('toJSON', {
  transform: (_doc, ret) => {
    if (ret.price && ret.price instanceof mongoose.Types.Decimal128) {
      ret.price = parseFloat(ret.price.toString());
    }
    return ret;
  },
});

export const ProductModel = model<IProduct>('Product', ProductSchema);
