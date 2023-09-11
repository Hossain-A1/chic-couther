import { useEffect } from "react";
import { useProductContext } from "./hooks/useProductContext";
import { useParams } from "react-router-dom";

const singleData = "https://fakestoreapi.com/products";

const SingleProduct = () => {
  const { id } = useParams();
  const { getSingleProduct, isLoading, product } = useProductContext();

  const {title} = product

  useEffect(() => {
    getSingleProduct(`${singleData}?id=${id}`);
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
    <h2>{title}</h2>
    </div>
  );
};

export default SingleProduct;
