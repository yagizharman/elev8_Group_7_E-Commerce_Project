import React from "react";
import ProductCard from "./ProductCard";

const Products = ({ products }) => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
          {" "}
          Project made by Group #7{" "}
        </h1>
        <span className="w-20 h-[3px] bg-black"> </span>
        <p className="max-w-[700px] text-gray-600 text-center">
          Our project is a fantastic online market place where individuals can buy, sell,
          trade, and collect one-of-a-kind products. The project is made by React.js, Tailwind, Stripe, Firebase, Redux technologies.
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {/* TODO Implement this logic of productscard*/}
        {/*<ProductCard/> */}
        {products.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
