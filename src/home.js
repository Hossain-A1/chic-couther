import { Link } from "react-router-dom";
import PageTitle from "./shared/PageTitle";

const HomePage = () => {
  return (
    <main className='wrapper section-p h-[calc(100vh-5rem)] grid grid-cols-3'>
      <div className='col-span-1'>
        <PageTitle
          subtitle='Welcome to'
          title='Chic-coutuer clothes store'
          description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus ab vero, molestiae doloribus amet veniam neque quam reprehenderit beatae error. Facilis reiciendis cumque atque, nobis placeat ab odit laboriosam aperiam?'
        />
      </div>

      <div className='col-span-2'>
        <div className=' border h-full w-full px-5'>
        <div className="pb-10">
        <h2 className='text-xl font-semibold capitalize text-center'>
            Best selling products
          </h2>

          <figure className='h-40 w-40 border overflow-hidden'>
            <Link to='/products'>
              <img src='' alt='' className='w-full h-full object-cover' />
            </Link>
          </figure>
        </div>

          <div className="flex flex-col gap-5 items-center">
            <h2 className='text-xl font-semibold capitalize text-center'>
              trusted by 1000+ companies{" "}
            </h2>

        <div className="companies space-x-10">
          <span className="text-4xl text-slate-500">O</span>
          <span className="text-4xl text-slate-500">O</span>
          <span className="text-4xl text-slate-500">O</span>
          <span className="text-4xl text-slate-500">O</span>
          <span className="text-4xl text-slate-500">O</span>
        </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
