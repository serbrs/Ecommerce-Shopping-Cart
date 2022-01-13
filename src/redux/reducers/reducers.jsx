import { combineReducers } from "redux";
import {
  productReducer,
  singleProductReducer,
  cardReducer,
} from "./productReducers";

export const rootReducers = combineReducers({
  Allproducts: productReducer,
  product: singleProductReducer,
  card: cardReducer,
});
