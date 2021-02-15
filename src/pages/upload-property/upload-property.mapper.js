

export const mapNewPropertyFromVmToApi = (newProperty) => {
  return {
    id: newProperty.id,
    title: newProperty.title,
    notes: newProperty.notes,
    email: newProperty.email,
    phone: newProperty.phone,
    price: parseInt(newProperty.price),
    saleTypes: newProperty.saleTypes,
    address: newProperty.address,
    city: newProperty.city,
    province: newProperty.province,
    squareMeter: parseInt(newProperty.squareMeter),
    rooms: parseInt(newProperty.rooms),
    bathrooms: parseInt(newProperty.bathrooms),
    locationUrl: newProperty.locationUrl,
    mainFeatures: newProperty.mainFeatures,
    equipmentIds: newProperty.equipmentId,
    images: newProperty.images,
  };
};
