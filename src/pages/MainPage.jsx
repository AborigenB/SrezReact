import React, { useState } from 'react';
import Header from '../components/Header';
import Slider from '../components/Slider';
import ProductCard from '../components/ProductCard';
import ProductDetail from '../components/ProductDetail';
import Modal from '../components/Modal';
import SearchFilter from '../components/SearchFilter';
import productsData from '../data/products';
import CategoryFilter from '../components/CategoryFilter';
import PriceSort from '../components/PriceSort';

export default function MainPage () {
  const [products, setProducts] = useState(productsData);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [category, setCategory] = useState('');

  const handleOrder = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleSearch = (term) => {
    const filteredProducts = productsData.filter(product => product.name.toLowerCase().includes(term.toLowerCase()));
    setProducts(filteredProducts);
  };

  const handleModalSubmit = (name, email) => {
    console.log(`Заказ от ${name} (${email}) на товар ${selectedProduct.name}`);
  };

  const unsorted = products;
  const sortProducts = (sorting)=>{
    switch(sorting){
        case 'asc':
            return setProducts([...products].sort((a,b) => a.price - b.price))
        case 'desc':
            return setProducts([...products].sort((a,b) => b.price - a.price))
    }
  }
  
  const handleCategoryChange = (category)=>{
    return setProducts([products.filter(element=>element.category == category)]);
  }

  return (
    <div className="container mx-auto flex flex-col gap-5">
      <Header />
      <Slider />
      <SearchFilter onSearch={handleSearch} />
      {/* {(products.length = 0) && 
        <div>Ну ладно, можно и 8 балов из 9</div>
      } */}
      <CategoryFilter products={products} setCategory={setCategory} category={category} handleCategoryChange={handleCategoryChange}></CategoryFilter>
      <PriceSort sortProducts={sortProducts} ></PriceSort>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} onOrder={handleOrder} onDetails={handleDetails} />
        ))}
      </div>
      {selectedProduct && 
        <div className="flex flex-col gap-4">
            <h2 className='text-3xl'>Заказ</h2>
            <div className="flex gap-4">
                <div className="p-4 w-max bg-green-800 text-white">
                    <h1 className="text-2xl">{selectedProduct.name}</h1>
                    <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-48 object-contain" />
                    <p className="text-lg">{selectedProduct.price} ₽</p>
                    <p>Количество на складе: {selectedProduct.quantity}</p>
                </div>
                
            </div>
        </div>
        }
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleModalSubmit} />
    </div>
  );
};