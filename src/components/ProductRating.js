import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
const ProductRating = ({ rating }) => {
  const indexStart = Array.from({ length: 5 }, (_, index) => {
    let numbers = index + 0.5;

    return (
      <span key={index}>
        {rating?.rate >= index + 1 ? (
          <FaStar />
        ) : rating?.rate >= numbers ? (
          <FaStarHalfAlt />
        ) : (
          <AiOutlineStar />
        )}
      </span>
    );
  });
  return (
    <div>
      <h2 className='flex justify-start gap-1 text-[1rem] items-center text-yellow-500'>
        {indexStart}{" "}
        <span className='text-black  text-sm'>
          ({rating?.count}reviews)
        </span>{" "}
      </h2>
      <span className="text-sm">Rating: ({rating?.rate})</span>
    </div>
  );
};

export default ProductRating;
