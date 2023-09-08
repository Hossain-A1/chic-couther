export const productReducer =(state,action)=> {

  switch (action.type) {
    case "GET_ALL_PRODUCTS":
      
      return{
        ...state,
        isLoading:false,
        products: action.payload
      }
  
    default:
      break;
  }

}