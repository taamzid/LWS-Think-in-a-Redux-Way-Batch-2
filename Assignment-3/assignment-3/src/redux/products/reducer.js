import { ADDPRODUCTS, DECREASEQUANTITY } from "./actionTypes";
import initialState from "./initialState";

const addProductsId = (addProducts) => {
  const maxId = addProducts.reduce(
    (maxId, addProduct) => Math.max(addProduct.id, maxId),
    -1
  );
  return maxId + 1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDPRODUCTS:
      const newProduct = {
        ...action.payload,
        id: addProductsId(state),
      };
      return [...state, newProduct];

    case DECREASEQUANTITY:
      const prodName = action.payload.prodName;
      const updatedCartItems = state
        .map((item) => {
          if (item.name === prodName) {
            return {
              ...item,
              prodQuantity: item.prodQuantity > 1 ? item.prodQuantity - 1 : 0,
            };
          } else {
            return item;
          }
        })
        .filter((item) => item.prodQuantity > -1);

      return updatedCartItems;

    default:
      return state;
  }
};

export default reducer;
