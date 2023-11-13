// property-list.page.js

// ... (importaciones y código existente)

Promise.all([getPropertyList(), getSaleTypeList(), getProvinceList()]).then(
    ([propertyList, saleTypeList, provinceList]) => {
      loadPropertyList(propertyList);
      setOptions(saleTypeList, 'select-sale-type', '¿Qué venta?');
      setOptions(provinceList, 'select-province', '¿Dónde?');
      // ... otras opciones de filtro ...
    }
  );
  
  // ... (resto del código)
  