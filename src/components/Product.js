import { NavLink } from "react-router-dom";
import { CurrencyFormatter } from "../shared/CurrencyFormatter";

const Product = ({ id, image, title,price }) => {
  return (
    <NavLink to={`/singleproduct/${id}`} className=' shadow-sm'>
      <figure className='w-[10rem] h-[12rem]   overflow-hidden'>
        <img
          src={image}
          alt={title}
          className='w-full h-full object-fill cursor-pointer'
        />
      </figure>
  <div className="flex flex-col gap-2">    <h3 className='h-12'>{(title).substring(0,40)}.</h3>
      <span  className='text-xl font-semibold'>{<CurrencyFormatter amount={price}/>}</span></div>
    </NavLink>
  );
};

export default Product;
