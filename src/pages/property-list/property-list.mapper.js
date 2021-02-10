/*
property{
    id: string,
    title: string,
    rooms:string // 3 (añadir) habitaciones,
    squareMeter: string;//136(añadir) m2;
    notes:truncarla(cortarla), cuando llegue a 240caracteres,
    price: string//120.000(añadir) €,
    image: string // primera imagen del array de imagenes en base 64,
}
*/
/* export const mapPropertyListFromApiToVm = propertyList =>{
    propertyList.map((porperty))
} */
export const mapPropertyListFromApiToVm = (propertyList) => {
  return propertyList.map((property) => mapPropertyFromApiToVm(property));
};

const mapPropertyFromApiToVm = (property) => {
  return {
    id: property.id,
    title: property.title,
    rooms: `${property.rooms}${getRoomWord(property.rooms)}`,
    squareMeter: `${property.squareMeter}m2`,
    //usamos el metodo substring, te da un cacho de cadena del caracter x hastra el caracter y
    notes: `${property.notes.substring(0, 240)}...`,
    // metodo toLocalString nos pone el . en el importe.
    price: `${property.price.toLocaleString()}€`,
    //usamos el metodo Array.is array, devuelve un booleano si es o no array
    image: Array.isArray(property.images) ? property.images[0] : '',
    //si es array nos devuelve la primera foto,
  };
};

const getRoomWord = (rooms) => (rooms > 1 ? 'habitaciones' : 'habitación');

export const mapFilterToQueryParams = (filter) => {
  //_gte = mayor o igual,
  //_like =que sese array contenga lo que hay en el filtro(que es array,),
  //= que sea igual a lo que hay en el filtrio
  //_lte = menor o igual
  let queryParams = '';
  if (filter.saleTypeId) {
    queryParams = `${queryParams}saleTypeIds_like=${filter.saleTypeId}&`;
    //porque es un array
  }
  if (filter.provinceId) {
    queryParams = `${queryParams}provinceId=${filter.provinceId}&`;
  }
  if (filter.minBathroom) {
    queryParams = `${queryParams}bathrooms_gte=${filter.minBathroom}&`;
  }
  if (filter.minRooms) {
    queryParams = `${queryParams}rooms_gte=${filter.minRooms}&`;
    //añadimos & al final, para poder añadir mas parametros de filtrado
    //{queryParams} dejamos lo que hay y añadimos el filtro por habitaciones
  };
  if (filter.minPrice) {
    queryParams = `${queryParams}price_gte=${filetr.minPrice}&`;
  }
  if (filter.maxPrice) {
    queryParams = `${queryParams}price_lte=${filter.maxPrice}&`;
  };

  return queryParams.slice(0, -1);
  // metodo slice ,para quedarte con una parte de la cadena
  //desde el 0, al poner menos -1 quita el ultimo que es &

};
