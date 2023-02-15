import { AxiosResponse } from 'axios';
import api from 'helpers/api';

import Product from '../interfaces/Product';

interface Data {
  limit: number;
  skip: number;
  total: number;
}

interface ResponseRequest<T> {
  status: number;
  data: T;
}

interface ProductsData extends Data {
  products: Product[];
}

export interface GetProductsResponse extends ResponseRequest<ProductsData> {}
export interface GetProductResponse extends ResponseRequest<Product> {}
interface GetBestSellersResponse extends AxiosResponse<ProductsData> {}
interface GetPopularResponse extends GetBestSellersResponse {}
interface GetDiscountResponse extends GetBestSellersResponse {}

const GetProduct = async (productId: number) => {
  return await api.get(`products/${productId}`);
};

const GetProducts = async () => {
  return await api.get(`products/?limit=10`);
};

const GetBestSellers = async (limit = 4): Promise<GetBestSellersResponse> => {
  return await api.get(`products/?limit=${limit}&skip=10`);
};

const GetPopular = async (limit = 8): Promise<GetPopularResponse> => {
  return await api.get(`products/?limit=${limit}&skip=14`);
};

const GetDiscounts = async (): Promise<GetDiscountResponse> => {
  return await api.get(`products/?limit=2&skip=22`);
};

const productService = {
  GetBestSellers,
  GetDiscounts,
  GetPopular,
  GetProduct,
  GetProducts,
};

export default productService;
