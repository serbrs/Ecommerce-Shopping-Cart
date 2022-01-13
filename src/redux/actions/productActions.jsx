import fakeStoreApi from "../../api/fetchRequest";

export const AllActions = {
  FETCH_SELECTED_PRODUCT: "FETCH_SELECTED_PRODUCT",
  FETCH_PRODUCTS: "FETCH_PRODUCTS",
  SET_SELECTED_PRODUCTS: "SET_SELECTED_PRODUCTS",
  REMOVE_SElECTED_PRODUCTS: "REMOVE_SELECTED_PRODUCTS",
  ADD_TO_CARD: "ADD_TO_CARD",
  REMOVE_FROM_CARD: "REMOVE_FROM_CARD",
  ADD_QUANTITY: "ADD_QUANTITY",
  SUB_QUANTITY: "SUB_QUANTITY",
};

export const fetchProducts = () => async (dispatch) => {
  const response = await fakeStoreApi.get("/products").catch((err) => {
    console.log("Error", err);
  });
  dispatch({
    type: AllActions.FETCH_PRODUCTS,
    product: response.data,
  });
};

export const fetchProduct = (id) => {
  return async (dispatch) => {
    const response = await fakeStoreApi.get(`/productS/${id}`).catch((err) => {
      console.log("Error", err);
    });
    dispatch({
      type: AllActions.FETCH_SELECTED_PRODUCT,
      product: response.data,
    });
  };
};

export const removeSelectedProduct = () => {
  return {
    type: AllActions.REMOVE_SElECTED_PRODUCTS,
  };
};

export const addToCard = (product) => {
  return {
    type: AllActions.ADD_TO_CARD,
    payload: product,
  };
};

export const removeFromCard = (product) => {
  return {
    type: AllActions.REMOVE_FROM_CARD,
    payload: product,
  };
};

export const subQuantity = (product) => {
  return {
    type: AllActions.SUB_QUANTITY,
    payload: product,
  };
};

export const addQuantity = (product) => {
  return {
    type: AllActions.ADD_QUANTITY,
    payload: product,
  };
};
