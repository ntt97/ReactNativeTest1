import { ItemProduct } from './../@types/index';
import { ParamsGetProduct } from '@types';
import axios from 'axios';
import Config from 'react-native-config';
const API_URL = Config.API_URL;

const getProductApi = async (params: ParamsGetProduct): Promise<ItemProduct> => {
  const { page, limit } = params.pagination;
  return await axios.get(`${API_URL}/product?page=${page}&limit=${limit}`);
};
export { getProductApi };
