export const productReducer = (state, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "GET_ALL_PRODUCTS":
      return {
        ...state,
        isLoading: true,
        products: action.payload,
      };

    case "IS_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "IS_PRODUCT_LOADING":
      return {
        ...state,
        product_loading: true,
      };
    case "GET_A_PRODUCT":
      return {
        ...state,
        product_loading: false,
        product: action.payload,
      };

    case "IS_PRODUCT_ERROR":
      return {
        ...state,
        prduct_loading: false,
        product_error: true,
      };
    case "PRODUCT_SEARCH":
      const { name, userValue } = action.payload;
      return {
        ...state,
        filter_search: {
          ...state.filter_search,

          [name]: userValue,
        },
      };

    case "SEARCHING_PRODUCTS":
      let { products } = state;
      let copyArr = [...products];
      const { text, title } = state.filter_search;

      if (text) {
        copyArr = copyArr.filter((el) => {
          return el.name.toLowerCase().includes(text);
        });
      }

      return {
        ...state,
        product: copyArr,
      };
    default:
      return state;
  }
};
