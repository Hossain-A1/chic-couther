import {BsList,BsFillGridFill} from 'react-icons/bs'
import { useFilterContext } from '../../hooks/useFilterContext';

const SortProduct = () => {
  const {handleGridView,handleListView,grid_view}= useFilterContext()
  return (
    <section>
       <div className='sort-list flex justify-start items-center border-none cursor-pointer lg:gap-5 gap-3'>
        <button onClick={handleGridView}>
          <BsFillGridFill
            className={
              grid_view ? "bg-black text-white lg:text-3xl text-lg  p-1" : "lg:text-3xl text-lg p-1"
            }
          />
        </button>
        <button onClick={handleListView}>
          <BsList
            className={
              !grid_view ? "bg-black text-white lg:text-3xl text-lg p-1 " : "lg:text-3xl text-lg p-1"
            }
          />
        </button>
      </div>
    </section>
  )
}

export default SortProduct