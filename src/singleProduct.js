import { useEffect } from "react";
import {useProductContext} from "./hooks/useProductContext"
import { useParams } from "react-router-dom";

const API = "https://fakestoreapi.com/products";

const SingleProduct = () => {


  const {getSingleProduct,isLoading} = useProductContext() 

  const {id} = useParams()

  const {title,image} = getSingleProduct
  console.log(title);


  useEffect(()=>{
getSingleProduct(`${API}?id=${id}`)
  },[id])

if(isLoading){
  return <p>Loading...</p>
}
  return (
    <div>
       <div  className=' shadow-sm'>
   <figure className="w-[10rem] h-[12rem]   overflow-hidden">
   {image}
   </figure>
      <h3 className="h-12">{title}</h3>
      </div>
    </div>
  )
}

export default SingleProduct