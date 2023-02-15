import api from 'helpers/api';

import Category from '../interfaces/Category';

interface ResponseRequest<T> {
  status: number;
  data: T;
}

export interface GetCategoriesResponse extends ResponseRequest<Category[]> {}

const GetCategories = async (): Promise<GetCategoriesResponse> => {
  return await api.get('products/categories');
};

const categoryService = {
  GetCategories
};

export default categoryService;
