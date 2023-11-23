
import { uploadProperty } from './upload-property.api';
import { setCheckboxList, setOptionList, onAddFeature, onRemoveFeature, onAddImage } from './upload-helpers';


const propertyData = {
  // Datos de la propiedad recopilados del usuario
  // ...

  // Ejemplo:
  features: [],
  images: [],
};

// Llamada a la función de la API
document.getElementById('submit-button').addEventListener('click', async () => {
  try {
    const result = await uploadProperty(propertyData);
    console.log('Property uploaded successfully:', result);
  } catch (error) {
    console.error('Error uploading property:', error);
  }
});
