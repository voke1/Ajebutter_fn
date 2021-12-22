import axios from "axios";
import { MAKE_PAYMENT } from "../../constants/url";
import {
  apiPost,
  makePaymentBegin,
  makePaymentFailure,
  makePaymentSuccess,
} from "../../utils/Utils";

export function makePayment(data) {
  return async (dispatch) => {
    dispatch(makePaymentBegin());
    try {
      const payment = await apiPost(MAKE_PAYMENT, data);
      if (payment) {
        dispatch(makePaymentSuccess(payment));

        return payment;
      }
      if (!payment) dispatch(makePaymentFailure(payment.data));
    } catch (err) {
      dispatch(makePaymentFailure(err.response.data));
      return err.response;
    }
  };
}


export function setPayment(payment) {
  return async (dispatch) => {
    dispatch(makePaymentSuccess(payment));
    console.log("MY PAYMENTS: ", payment);
  };
}
