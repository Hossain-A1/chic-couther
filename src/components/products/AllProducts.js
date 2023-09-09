import React from "react";
import { useProductContext } from "../../hooks/useProductContext";
import Product from "./Product";

const AllProducts = () => {
  const { products } = useProductContext();
  console.log(products);

  return (
    <section className=''>
      <div className='grid grid-cols-3 gap-10 items-center'>
        {products.length > 0 &&
          products
            .filter((el) => el.category === "men's clothing")
            .map((singleProduct) => (
              <Product key={singleProduct.id} {...singleProduct} />
            ))}
      </div>
    </section>
  );
};

export default AllProducts;
