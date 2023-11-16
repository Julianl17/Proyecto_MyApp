
import React from 'react';

const ProductDetail = ({ data }) => {
  return (
    <div>
      <h2>{data.nombre}</h2>
      <p>{data.descripcion}</p>
      <p>Precio: ${data.precio}</p>
      <p>SKU: {data.sku}</p>
      <p>Cantidad disponible: {data.cantidad}</p>
    </div>
  );
};

export default ProductDetail;
