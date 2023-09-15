import Product from "./Product";

const GridView = ({ products }) => {
  return (
    <section className='wrapper section-p'>
      <div className=' grid lg:grid-cols-3 grid-cols-1 lg:gap-10 gap-2'>
        {products.length > 0 &&
          products.map((item) => {
            return <Product key={item.id} {...item} />;
          })}
      </div>
    </section>
  );
};

export default GridView;
