import {  NavLink } from "react-router-dom";

const Product = ({ id,image,title }) => {
  return (
    <NavLink to={`/singleproduct/${id}`} className=' shadow-sm'>
      <figure className='w-[10rem] h-[12rem]   overflow-hidden'>
        <img
          src={image}
          alt={title}
          className='w-full h-full object-fill cursor-pointer'
        />
      </figure>
      <h3 className='h-12'>{title}</h3>
    </NavLink>
  );
};

export default Product;
