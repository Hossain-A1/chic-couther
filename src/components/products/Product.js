import { Link } from "react-router-dom";

const Product = ({product}) => {

  return (
    <div className=''>
      <Link to={`/singleProduct/${product.id}`} className=' shadow-sm'>
   <figure className="w-[10rem] h-[12rem]   overflow-hidden">
    <img src={product.image} alt={product.title} className="w-full h-full object-fill cursor-pointer"/>
   </figure>
      <h3 className="h-12">{product.title}</h3>
      </Link>
    </div>
  );
};

export default Product;
