import mongoose, { type Document, model, Schema } from 'mongoose';

export interface IUser extends Document {
  _id: string;
  name: string;
  email: string;
  balance: mongoose.Types.Decimal128;
}

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    balance: {
      type: Schema.Types.Decimal128,
      default: mongoose.Types.Decimal128.fromString('100.00'),
    },
  },
  {
    versionKey: false,
  },
);
userSchema.set('toJSON', {
  transform: (_doc, ret) => {
    if (ret.balance && ret.balance instanceof mongoose.Types.Decimal128) {
      ret.balance = parseFloat(ret.balance.toString());
    }
    return ret;
  },
});

export const UserModel = model<IUser>('User', userSchema);
