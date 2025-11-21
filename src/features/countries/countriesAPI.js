import API from '../../services/api/axiosConfig';

export const fetchCountriesAPI = async () => {
  const response = await API.get('/countries');
  return response?.data;
};
