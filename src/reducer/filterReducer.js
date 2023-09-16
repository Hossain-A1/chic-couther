export const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let priceArr = action.payload.map((curElem) => curElem.price);
      let maxPrice = Math.max(...priceArr);
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: { ...state.filters, maxPrice, price: maxPrice },
      };

    case "GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };
    case "LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

      
    case "SORT_OPTION_ITEM":
      return {
        ...state,
        sort_options: action.payload,
      };

    case "SORT_PRODUCTS":
      let newSortData;

      let { filter_products, sort_options } = state;
      let copySortData = [...filter_products];

      const sortingProducts = (x, y) => {
        if (sort_options === "highest") {
          return y.price - x.price;
        }
        if (sort_options === "lowest") {
          return x.price - y.price;
        }
        if (sort_options === "A-Z") {
          return x.title.localeCompare(y.title);
        }
        if (sort_options === "Z-A") {
          return y.title.localeCompare(x.title);
        }
      };

      newSortData = copySortData.sort(sortingProducts);

      return {
        ...state,
        filter_products: newSortData,
      };

    case "PRODUCT_SEARCH":
      const { title, userValue } = action.payload;

      return {
        ...state,
        filters: {
          ...state.filters,
          [title]: userValue,
        },
      };

    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let copyArr = [...all_products];
      const { text } = state.filters;

      copyArr = copyArr.filter((item) => {
        return item.title.toLowerCase().includes(text);
      });

      return {
        ...state,
        filter_products: copyArr,
      };

    default:
      return state;
  }
};
