import { useParams, useNavigate } from 'react-router-dom';
import React from 'react';
import products from '../data/products';

const ProductDetail = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const product = products.filter(element=>element.id == id); 
    console.log(product);
    return (
        <div className="flex gap-4">
            <div className="p-4 w-max bg-green-800 text-white">
                <h1 className="text-2xl">{product[0].name}</h1>
                <img src={product[0].image} alt={product[0].name} className="w-full h-48 object-contain" />
                <p className="text-lg">{product[0].price} ₽</p>
                <p>Количество на складе: {product[0].quantity}</p>
            </div>
            <button className='bg-green-800 p-4 rounded h-min text-white' onClick={() => navigate(-1)}>Назад</button>
        </div>
    );
};

export default ProductDetail;