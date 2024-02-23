import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const fetchApi = async () => {
    const response = await axios.get(BACKEND_URL + "/api/tickers/data");
  const data = response?.data?.data;
  return data;
 
};

export default fetchApi;
