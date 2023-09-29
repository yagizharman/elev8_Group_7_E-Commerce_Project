import React from 'react'
import ProductsCard from './ProductsCard';

const Products = () => {
  return (
    <div className="py-10">
       <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center"> What is Store? </h1>
        <span className="w-20 h-[3px] bg-black">  </span>
        <p className="max-w-[700px] text-gray-600 text-center">
        Store is a huge online market place where individuals can buy, sell, trade, 
        and collect one-of-a-kind products. Additionally, as a community, 
        we work to promote improvements for people, the environment, and small businesses.
        </p>
       </div>
       <div className="max-w-screen-xl mx-auto">
        {/* TODO Implement this logic of productscard*/}
        {/*<ProductsCard/> */} 
       </div>
    </div>
  )
};

export default Products;