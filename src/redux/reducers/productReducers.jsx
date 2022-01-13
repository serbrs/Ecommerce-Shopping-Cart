import { AllActions } from "../actions/productActions";

const initialState = {
  product: [],
};
const card = [];

export const productReducer = (state = initialState, { type, product }) => {
  switch (type) {
    case AllActions.FETCH_PRODUCTS:
      return {
        ...state,
        product,
      };
    default:
      return state;
  }
};

export const singleProductReducer = (
  state = initialState,
  { type, product }
) => {
  switch (type) {
    case AllActions.FETCH_SELECTED_PRODUCT:
      return {
        ...product,
      };
    case AllActions.REMOVE_SElECTED_PRODUCTS:
      return {};
    default:
      return state;
  }
};

export const cardReducer = (state = card, { type, payload }) => {
  switch (type) {
    case AllActions.ADD_TO_CARD:
      const existItem = state.find((p) => p.id === payload.id);
      if (existItem) {
        return state.map((item) => {
          return item.id === payload.id
            ? { ...payload, qty: item.qty + 1 }
            : item;
        });
      } else {
        return [
          ...state,
          {
            ...payload,
            qty: 1,
          },
        ];
      }

    case AllActions.REMOVE_FROM_CARD:
      return state.filter((item) => item.id !== payload.id);

    case AllActions.ADD_QUANTITY:
      return state.map((item) =>
        item.id === payload.id ? { ...payload, qty: item.qty + 1 } : item
      );

    case AllActions.SUB_QUANTITY:
      const itemExisted = state.find((item) => item.id === payload.id);
      if (itemExisted.qty > 1) {
        return state.map((item) =>
          item.id === payload.id ? { ...payload, qty: item.qty - 1 } : item
        );
      } else {
        const itemExisted2 = state.find((item) => item.id === payload.id);
        if (itemExisted2.qty === 1) {
          return state.filter((item) => item.qty !== 1);
        }
      }
      break;
    default:
      return state;
  }
};
