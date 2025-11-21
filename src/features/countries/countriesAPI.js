import API from '../../services/api/axiosConfig';

export const fetchCountriesAPI = async () => {
  const response = await API.get('/all?fields=name,region,flag');
  return response?.data;
};
