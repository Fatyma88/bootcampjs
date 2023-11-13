import Axios from 'axios';

const propertyUrl = `${process.env.BASE_API_URL}/properties`;
const saleTypeListUrl = `${process.env.BASE_API_URL}/saleTypes`;
const provinceListUrl = `${process.env.BASE_API_URL}/provinces`;

export const getPropertyList = (queryParams) => {
  const url = queryParams ? `${propertyUrl}?${queryParams}` : propertyUrl;
  return Axios.get(url).then(({ data }) => data);
};

export const getSaleTypeList = () => Axios.get(saleTypeListUrl).then(({ data }) => data);
export const getProvinceList = () => Axios.get(provinceListUrl).then(({ data }) => data);

