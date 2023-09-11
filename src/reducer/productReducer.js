export const productReducer = (state, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "IS_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "GET_ALL_PRODUCTS":
      return {
        ...state,
        isLoading: true,
        products: action.payload,
      };
    case "GET_A_PRODUCT":
      return {
        ...state,
        isLoading: false,
        product: action.payload,
      };

      case "PRODUCT_SEARCH":
        const { name, userValue } = action.payload
        return {
          ...state,
          filter_search: {
            ...state.filter_search,
  
            [name]: userValue,
          },
        };

        case "SEARCHING_PRODUCTS":
          let {product} = state
          let copyArr = [...product]
          const { text ,title} = state.filter_search;

  if (text) {
        copyArr = copyArr.filter((el) => {
          return el.name.toLowerCase().includes(text);
        });
      }

          return{
            ...state,
            product:copyArr
          }
    default:
      return state;
  }
};
