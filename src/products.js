import FilterSection from "./components/filter_products/FilterSection";
import AllProducts from "./components/products/AllProducts";

const ProductsPage = () => {
  
  return (
    <main className="wrapper h-[calc(100vh-5rem)] section-p">
      <div className='grid lg:grid-cols-4 grid-cols-3  gap-10 '>
        <div className='col-span-1'>
          <FilterSection />
        </div>

        <div className='lg:col-span-3 grid-cols-2 items-center'>
          <div className='sort'>
        
          </div>
          <div className='main-products'>
            <AllProducts />
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProductsPage