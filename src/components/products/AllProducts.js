import React from "react";
import { useProductContext } from "../../hooks/useProductContext";
import Product from "./Product";

const AllProducts = () => {
  const { products } = useProductContext();
  console.log(products);

  return (
    <section className='bg-slate-700 h-screen w-full'>
    <div>
    {products.length > 0 &&
        products?.map((singleProduct) =><Product key={singleProduct.id} {...singleProduct} />)}
        <h1>hello</h1>
    </div>
    </section>
  );
};

export default AllProducts;
