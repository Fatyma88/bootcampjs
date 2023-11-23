// upload-property.api.js
import axios from 'axios';

export const uploadProperty = async (propertyData) => {
  try {
    const response = await axios.post('/api/upload-property', propertyData);
    return response.data;
  } catch (error) {
    console.error('Error uploading property:', error);
    throw error;
  }
};
