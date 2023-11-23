// property-detail.mappers.js

// Función para mapear los datos de la propiedad a la página HTML
export const mapPropertyToPage = (propertyData) => {
    // Mapear datos generales
    document.getElementById('title').textContent = propertyData.title || '';
    document.getElementById('city').textContent = propertyData.city || '';
    document.getElementById('rooms').textContent = `${propertyData.rooms || 0} habitaciones, `;
    document.getElementById('squareMeter').textContent = `${propertyData.squareMeter || 0} m², `;
    document.getElementById('bathrooms').textContent = `${propertyData.bathrooms || 0} baños`;
  
    // Mapear precio
    document.getElementById('price').textContent = propertyData.price ? `${propertyData.price} €` : '';
  
    // Mapear notas y descripciones
    document.getElementById('notes').textContent = propertyData.notes || '';
  
    // Mapear características básicas
    const mainFeaturesList = document.getElementById('mainFeatures');
    mainFeaturesList.innerHTML = ''; // Limpiar la lista antes de agregar nuevas características
    propertyData.mainFeatures.forEach(feature => {
      const listItem = document.createElement('li');
      listItem.textContent = feature;
      mainFeaturesList.appendChild(listItem);
    });
  
    // Mapear equipamiento
    const equipmentsList = document.getElementById('equipments');
    equipmentsList.innerHTML = '';
    propertyData.equipments.forEach(equipment => {
      const listItem = document.createElement('li');
      listItem.textContent = equipment;
      equipmentsList.appendChild(listItem);
    });
  
    // Mapear imágenes de la galería
    const imagesList = document.getElementById('images');
    imagesList.innerHTML = '';
    propertyData.images.forEach(image => {
      const listItem = document.createElement('li');
      const imageElement = document.createElement('img');
      imageElement.src = image;
      listItem.appendChild(imageElement);
      imagesList.appendChild(listItem);
    });
  
    // Mapear ubicación
    document.getElementById('locationUrl').src = propertyData.locationUrl || '';
  
  };
  