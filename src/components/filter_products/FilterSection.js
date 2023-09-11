import { useProductContext } from "../../hooks/useProductContext";

const FilterSection = () => {
  const {
    handleSearchProducts,
    filter_search: { text },
  } = useProductContext();
  return (
    <div className='border h-screen w-full'>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type='text'
          name='text'
          value={text}
          placeholder='Search'
          className='py-1 px-4 outline-none border border-violet-500'
          onChange={handleSearchProducts}
        />
      </form>
    </div>
  );
};

export default FilterSection;
