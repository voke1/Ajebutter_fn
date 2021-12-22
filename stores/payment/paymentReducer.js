import * as authActionTypes from "../../constants/types";

const initialState = {
  payment: {},
  error: null,
  loading: false,
};

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.MAKE_PAYMENT_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.MAKE_PAYMENT_SUCCESS:
      return {
        ...state,
        payment: action.payload.payment,
        loading: false,
      };
    case authActionTypes.MAKE_PAYMENT_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    default:
      return state;
  }
};

export default paymentReducer;
