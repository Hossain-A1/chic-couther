import { useFilterContext } from "../../hooks/useFilterContext";

const FilterSection = () => {
  const {
    handleSearchProducts,
    filters: { text },
  } = useFilterContext();

  return (
    <div className='border h-full w-fit
  
    '>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type='text'
          value={text}
          title="text"
          placeholder='Search'
          className='py-1 px-4 outline-none border border-violet-500'
          onChange={handleSearchProducts}
        />
      </form>
    </div>
  );
};

export default FilterSection;
