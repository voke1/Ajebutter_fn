import * as authActionTypes from "../../constants/types";
import moment from "moment";

const initialState = {
  booking: {},
  error: null,
  loading: false,
  selectedDay: moment().format("YYYY-MM-DD"),
  selectedSlot: "",
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.CREATE_BOOKING_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.CREATE_BOOKING_SUCCESS:
      return {
        ...state,
        booking: action.payload.booking,
        loading: false,
      };
    case authActionTypes.CREATE_BOOKING_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    case authActionTypes.SELECTED_DAY_SUCCESS:
      return {
        ...state,
        selectedDay: action.payload.selectedDay,
      };
    case authActionTypes.SELECTED_SLOT_SUCCESS:
      return {
        ...state,
        selectedSlot: action.payload.selectedSlot,
      };

    default:
      return state;
  }
};

export default bookingReducer;
