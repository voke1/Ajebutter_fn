import { combineReducers } from "redux";
import tabReducer from "./tab/tabReducer";
import authReducer from "./auth/authReducer";
import specialistReducer from "./specialist/specialistReducer";
import paymentReducer from "./payment/paymentReducer";
import serviceReducer from "./service/serviceReducer";
import bookingReducer from "./booking/bookingReducer";
import appointmentReducer from "./appointment/appointmentReducer";

export default combineReducers({
  tabReducer,
  authReducer,
  specialistReducer,
  paymentReducer,
  serviceReducer,
  bookingReducer,
  appointmentReducer,
});
