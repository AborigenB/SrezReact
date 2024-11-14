import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onOrder, onDetails }) => {
  return (
    <div className="border rounded-lg p-4">
      <img src={product.image} alt={product.name} className="w-full h-48 object-contain" />
      <h2 className="text-xl">{product.name}</h2>
      <p className="text-lg">{product.price} ₽</p>
      {product.quantity > 0 ? (
        <button className="bg-green-500 text-white p-2 mt-2">В корзину</button>
      ) : (
        <button className="bg-red-500 text-white p-2 mt-2" onClick={() => onOrder(product)}>Заказать</button>
      )}
      <Link to={`/${product.id}`} className="text-blue-500 mt-2">Подробнее</Link>
    </div>
  );
};

export default ProductCard;