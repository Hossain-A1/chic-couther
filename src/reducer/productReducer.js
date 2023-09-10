export const productReducer =(state,action)=> {

  switch (action.type) {
    case "IS_LOADING":
      return {
        ...state,
        isLoading: true,
      };
      case "IS_ERROR":
        return{
          ...state,
          isLoading:false,
          isError:true
        }

    case "GET_ALL_PRODUCTS":
      
      return{
        ...state,
        isLoading:true,
        products: action.payload
      }
      case "GET_A_PRODUCT":

      return{
        ...state,
        isLoading:false,
        product: action.payload
      }
  
    default:
      break;
  }

}