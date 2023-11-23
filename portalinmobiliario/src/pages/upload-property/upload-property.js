
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




// upload-property.js

// Importar funciones necesarias
import { setCheckboxList, setOptionList } from './upload-helpers.js';
import { uploadPropertyToAPI } from './upload-property.api.js'; // Asegúrate de crear este archivo

// Función principal para inicializar la página de carga de propiedades
const initUploadPropertyPage = () => {
  // Obtener datos necesarios para el formulario (pueden provenir de una API, por ejemplo)
  const amenitiesList = [
    { id: 'amenity1', name: 'Piscina' },
    { id: 'amenity2', name: 'Jardín' },
    // ... más amenidades
  ];

  const provincesList = [
    { id: 'province1', name: 'Provincia 1' },
    { id: 'province2', name: 'Provincia 2' },
    // ... más provincias
  ];

  // Configurar checkbox y listas desplegables
  setCheckboxList(amenitiesList, 'amenitiesContainer');
  setOptionList(provincesList, 'provincesSelect');

  // Configurar el evento de clic para el botón de carga
  const uploadButton = document.getElementById('uploadButton');
  uploadButton.addEventListener('click', handleUpload);
};

// Función para manejar la carga de la propiedad
const handleUpload = async () => {
  // Obtener datos del formulario (asegúrate de tener los IDs correctos)
  const title = document.getElementById('titleInput').value;
  const price = document.getElementById('priceInput').value;
  const selectedAmenities = getSelectedAmenities(); // Implementa esta función según tu lógica
  const selectedProvince = document.getElementById('provincesSelect').value;

  // Validar datos antes de la carga
  const validationErrors = validateUploadData(title, price, selectedAmenities, selectedProvince);
  if (validationErrors) {
    // Manejar errores de validación (puedes mostrar mensajes de error, etc.)
    console.error('Errores de validación:', validationErrors);
    return;
  }

  // Crear un objeto con los datos de la propiedad
  const propertyData = {
    title,
    price,
    amenities: selectedAmenities,
    province: selectedProvince,
  };

  try {
    // Intentar cargar la propiedad a la API
    await uploadPropertyToAPI(propertyData);
    // La carga fue exitosa, puedes realizar acciones adicionales si es necesario
    console.log('Propiedad cargada exitosamente');
  } catch (error) {
    // Manejar errores durante la carga (puedes mostrar mensajes de error, etc.)
    console.error('Error durante la carga de la propiedad:', error.message);
  }
};

// Función para obtener las amenidades seleccionadas
const getSelectedAmenities = () => {
  const amenitiesContainer = document.getElementById('amenitiesContainer');
  const selectedAmenities = [];
  const checkboxes = amenitiesContainer.querySelectorAll('input[type="checkbox"]:checked');

  checkboxes.forEach((checkbox) => {
    selectedAmenities.push({
      id: checkbox.value,
      name: checkbox.nextSibling.textContent.trim(),
    });
  });

  return selectedAmenities;
};

// Función para validar los datos de carga
const validateUploadData = (title, price, amenities, province) => {
  const errors = {};

  // Implementa lógica de validación según tus necesidades
  // Aquí tienes un ejemplo básico:

  if (!title || title.trim() === '') {
    errors.title = 'El título es obligatorio';
  }

  if (!price || isNaN(price)) {
    errors.price = 'Ingrese un precio válido';
  }

  if (amenities.length === 0) {
    errors.amenities = 'Seleccione al menos una amenidad';
  }

  if (!province) {
    errors.province = 'Seleccione una provincia';
  }

  return Object.keys(errors).length > 0 ? errors : null;
};

// Inicializar la página cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initUploadPropertyPage);
