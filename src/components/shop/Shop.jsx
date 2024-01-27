import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../cards/ProductsCard';

const Shop = () => {
    const productData = useLoaderData();
    console.log(productData)
    return (
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {
                productData.map((product) =><ProductCard key={product.id} product={product}></ProductCard>)
            }
        </div>
    );
};

export default Shop;