import mongoose, { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
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
      default: mongoose.Types.Decimal128.fromString('100.00')
    }
  },
  {
    versionKey: false,
  },
);

export const UserModel = model<IUser>('User', userSchema);
