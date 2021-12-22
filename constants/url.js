export const API_BASE_URL = "http://192.168.43.131:9000/api/v1";
export const getApiUrl = (endpoint) => API_BASE_URL + endpoint;

export const LOGIN = getApiUrl("/auth/user/signin");
export const SIGNUP = getApiUrl("/auth/user/signup");
export const GET_ALL_SPECIALISTS = getApiUrl("/specialist/all");
export const GET_ALL_SERVICE = getApiUrl("/service/all");
export const MAKE_PAYMENT = getApiUrl("/payment");
export const CREATE_BOOKING = getApiUrl("/booking");
export const CREATE_APPOINTMENT = getApiUrl("/appointment");

const urlData = {
  LOGIN,
  SIGNUP,
  GET_ALL_SPECIALISTS,
  MAKE_PAYMENT,
  GET_ALL_SERVICE,
  CREATE_BOOKING,
  CREATE_APPOINTMENT,
};

export default urlData;
