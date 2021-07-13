import { ItemProduct } from './../@types/index';
import { ParamsGetProduct } from '@types';
import axios from 'axios';
import Config from 'react-native-config';
const API_URL = Config.API_URL;
console.log('===========================================');
console.log('Config', Config);
console.log('===========================================');

const getProductApi = async (params: ParamsGetProduct): Promise<ItemProduct> => {
  const { page, limit } = params.pagination;
  return await axios.get(`${API_URL}/item?page=${page}&limit=${limit}`);
};
export { getProductApi };
