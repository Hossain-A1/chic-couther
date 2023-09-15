import { NavLink } from "react-router-dom";
import { CurrencyFormatter } from "../shared/CurrencyFormatter";
const ListView = ({ products }) => {
  return (
    <section>
      <div className='wrapper section-p space-y-5'>
        {products.map((curElem) => {
          const { id, title, price, image, description } = curElem;

          return (
            <div
              key={id}
              className='grid grid-cols-3 border gap-10 items-center p-5 shadow-lg'
            >
              <figure className='w-[10rem] h-[12rem]  overflow-hidden col-span-1'>
                <img
                  src={image}
                  alt={title}
                  className='w-full h-full object-fill cursor-pointer'
                />
              </figure>

              <div className='flex flex-col items-start gap-3 col-span-2'>
                <h2 className='text-lg font-medium'>{title}</h2>
                <p>{description.substring(0, 55)}...</p>
                <span className='text-xl font-semibold'>
                  <CurrencyFormatter amount={price} />
                </span>
                <NavLink
                  to={`/singleproduct/${id}`}
                  className='py-2 px-4 bg-violet-700 rounded text-white'
                >
                  Veiw Details
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ListView;
