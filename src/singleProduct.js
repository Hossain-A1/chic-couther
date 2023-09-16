import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useProductContext } from "./hooks/useProductContext";
import ProductRating from "./components/ProductRating";
import { CurrencyFormatter } from "./shared/CurrencyFormatter";
import PageNavigation from "./components/PageNavigation ";
import { useCartContext } from "./hooks/useCartContext";

const singleData = "https://fakestoreapi.com/products";

const SingleProduct = () => {
  const { id } = useParams();

  const { getSingleProduct,  product, product_loading } =
    useProductContext();

    const {handleAddToCart} =  useCartContext()
    
  const { id: cartId, title, price, description, image, rating } = product;

  useEffect(() => {
    getSingleProduct(`${singleData}/${id}`);
  }, [id]);

  if (product_loading) {
    return <span>Loading...</span>;
  }

  return (
    <div className='wrapper section-p h-screen'>
      <PageNavigation product={product} />
      <div className='grid grid-cols-2 gap-5'>
        <div className='col-span-1 flex justify-center items-center'>
          <figure className='w-[14rem] h-[16rem]   overflow-hidden'>
            <img
              src={image}
              alt={title}
              className='w-full h-full object-fill cursor-pointer'
            />
          </figure>
        </div>

        <div className='col-span-1 flex flex-col items-start gap-3'>
          {" "}
          <h2 className='text-xl capitalize font-medium'>{title}</h2>
          <ProductRating rating={rating} />
          <del>
            <CurrencyFormatter amount={price + 10} />
          </del>
          <span className='text-xl font-bold text-violet-700'>
            <p className='text-sm font-normal'>
              Don't miss out on today's deal{" "}
            </p>
            <CurrencyFormatter amount={price} />
          </span>
          <p className='text-slate-800 w-4/5'>{description}</p>
          <Link
            to='/cart'
            className='py-2 px-4 bg-violet-700 hover:bg-violet-700/90 duration-300 text-white text-sm text-center'
            onClick={() => handleAddToCart(cartId, price,product)}
          >
            AddToCart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
