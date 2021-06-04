import { combineReducers } from "redux";

import { productReducer, selectedProductReducer } from "./ProductReducer";

const rootReducer = combineReducers({
  allProducts: productReducer,
  selectedProduct: selectedProductReducer,
});

export default rootReducer;
