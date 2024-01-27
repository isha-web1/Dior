import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../cards/ProductsCard';
import { addToDb } from '../../utils/FakeDb';

const Shop = () => {
    const productData = useLoaderData();
//    card button handler

   const handleAddToCart = id =>{
    addToDb(id)
   }

    return (
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {
                productData.map((product) =><ProductCard key={product.id} product={product} handleAddToCart={handleAddToCart}></ProductCard>)
            }
        </div>
    );
};

export default Shop;