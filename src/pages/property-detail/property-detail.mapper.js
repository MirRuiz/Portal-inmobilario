export const mapPropertyDetailFromApiToVm = (property) => {
  return {
    id: property.id,
    mainImage: Array.isArray(property.images) ? property.images[0] : '',
    title: property.title,
    city: property.city,
    price: `${property.price}€`,
    rooms: `${property.rooms}${getRoomWord(property.rooms)}`,
    squareMeter: `${property.squareMeter}m2`,
    bathrooms: `${property.bathrooms}${getBathroomsWord(property.bathrooms)}`,
    locationUrl: property.locationUrl,
    notes: property.notes,
    equipments: property.equipments,
    /* equipments: getEquipments(
      property,
      equipmentsList
    ), */
     /*  Array.isArray( property.equipamentId), *///hacer algo mas??
    mainFeatures: property.mainFeatures,
    images: property.images,
  };
};
const getRoomWord = (rooms) => (rooms > 1 ? 'habitaciones' : 'habitación'); 

const getBathroomsWord = (bathrooms) => (bathrooms > 1 ? 'baños' : 'baño');

const getEquipments = (property, equipmentsList) =>{
    const equipments = property.equipmentIds.map(elem =>{
        return equipmentsList.filter(obj => obj.id ===elem).name

    });
    return equipments;
}