import * as authActionTypes from "../../constants/types";

const initialState = {
  appointment: {},
  error: null,
  loading: false,
};

const appointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.CREATE_APPOINTMENT_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.CREATE_APPOINTMENT_SUCCESS:
      return {
        ...state,
        appointment: action.payload.appointment,
        loading: false,
      };
    case authActionTypes.CREATE_APPOINTMENT_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    default:
      return state;
  }
};

export default appointmentReducer;
