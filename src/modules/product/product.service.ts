import { type IProduct, ProductModel } from './Product.model';

export const getAllProductsService = async (): Promise<IProduct[] | []> => {
  return await ProductModel.find();
};
