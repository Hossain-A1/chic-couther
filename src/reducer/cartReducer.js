export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let { cartId, product, price } = action.payload;

      // existing product
      let existing_product = state.cart.find((el) => el.id === cartId);

      if (existing_product) {
        let updatedProduct = state.cart.map((el) => {
          if (el.id === cartId) {
            let newAmount = el.price + price;

            return {
              ...el,
              amount: newAmount,
            };
          } else {
            return el;
          }
        });

        return {
          ...state,
          cart: updatedProduct,
        };
      }

      let cartProduct;

      cartProduct = {
        id: cartId,
        title: product.title,
        price: product.price,
        image: product.image,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };

    case "CART_INCREMENT":
      const increment = state.cart.map((el) => {
        if (el.id === action.payload) {
          let incAmount = el.price + 1;
        
          return {
            ...el,
            amount: incAmount,
          };
        } else {
          return el;
        }
      });

      return {
        ...state,
        cart: increment,
      };

    default:
      return state;
  }
};
