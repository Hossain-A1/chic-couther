import React from "react";
import { useProductContext } from "../../hooks/useProductContext";
import Product from "./Product";

const AllProducts = () => {
  const { products } = useProductContext();

  return (
    <section className=''>
      <div className='grid grid-cols-3 gap-10 items-center'>
        {products.length > 0 &&
          products.map((product) => <Product key={product.id} {...product} />)}
      </div>
    </section>
  );
};

export default AllProducts;
