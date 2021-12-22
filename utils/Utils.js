import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import store from "../stores/store";
import {
  SIGN_UP_BEGIN,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,
  LOGIN_BEGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  GET_ALL_SPECIALISTS_BEGIN,
  GET_ALL_SPECIALISTS_FAILURE,
  GET_ALL_SPECIALISTS_SUCCESS,
  MAKE_PAYMENT_BEGIN,
  MAKE_PAYMENT_FAILURE,
  MAKE_PAYMENT_SUCCESS,
  CREATE_BOOKING_BEGIN,
  CREATE_BOOKING_FAILURE,
  CREATE_BOOKING_SUCCESS,
  CREATE_APPOINTMENT_BEGIN,
  CREATE_APPOINTMENT_FAILURE,
  CREATE_APPOINTMENT_SUCCESS,
  SELECTED_DAY_SUCCESS,
  SET_SELECTED_SPECIALIST_SUCCESS,
  SELECTED_SLOT_SUCCESS,
  SET_CATEGORY_SUCCESS,
  GET_ALL_SERVICES_BEGIN,
  GET_ALL_SERVICES_FAILURE,
  GET_ALL_SERVICES_SUCCESS,
  SET_SELECTED_CARD,
  SET_APTMNT_BTN,
} from "../constants/types";

const { dispatch, getState } = store;

function isValidEmail(value) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value).toLowerCase());
}

function validateEmail(value, setEmailError) {
  if (value == "") {
    setEmailError("");
  } else if (isValidEmail(value)) {
    setEmailError("");
  } else {
    setEmailError("Invalid Email");
  }
}

function validatePassword(value, setPasswordError) {
  if (value.length < 9) {
    setPasswordError("Password must be 9 characters");
  } else {
    setPasswordError("");
  }
}

function validateInput(value, minLength, setError) {
  if (value.length < minLength) {
    setError("Invalid Input");
  } else {
    setError("");
  }
}

function calculateAngle(coordinates) {
  let startLat = coordinates[0]["latitude"];
  let startLng = coordinates[0]["longitude"];
  let endLat = coordinates[1]["latitude"];
  let endLng = coordinates[1]["longitude"];
  let dx = endLat - startLat;
  let dy = endLng - startLng;

  return (Math.atan2(dy, dx) * 180) / Math.PI;
}

export async function getHeaders() {
  let userData = await AsyncStorage.getItem("userData");
  if (userData) {
    userData = JSON.parse(userData);
    return {
      authorization: `${userData.access_token}`,
      Accept: "application/json",
    };
  }
  return {};
}
export const noInternet = () => ({
  type: types.NO_INTERNET,
  payload: { internetConnection: true },
});

export const clearState = () => ({
  type: types.CLEAR_REDUX_STATE,
  payload: {},
});

export const signUpBegin = () => ({
  type: SIGN_UP_BEGIN,
  payload: {},
});

export const signUpSuccess = (user) => ({
  type: SIGN_UP_SUCCESS,
  payload: { user },
});

export const signUpFailure = (error) => ({
  type: SIGN_UP_FAILURE,
  payload: { error },
});
export const loginBegin = () => ({
  type: LOGIN_BEGIN,
  payload: {},
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: { user },
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: { error },
});
export const makePaymentSuccess = (payment) => ({
  type: MAKE_PAYMENT_SUCCESS,
  payload: { payment },
});
export const makePaymentBegin = () => ({
  type: MAKE_PAYMENT_BEGIN,
  payload: {},
});
export const makePaymentFailure = (error) => ({
  type: MAKE_PAYMENT_FAILURE,
  payload: { error },
});

export const setSelectedSpecialistSuccess = (selectedSpecialist) => ({
  type: SET_SELECTED_SPECIALIST_SUCCESS,
  payload: { selectedSpecialist },
});
export const setCardSelectedSuccess = (cardSelected) => ({
  type: SET_SELECTED_CARD,
  payload: { cardSelected },
});
export const setAptmntBtnSuccess = (aptmntBtnDisabled) => ({
  type: SET_APTMNT_BTN,
  payload: { aptmntBtnDisabled },
});
export const getAllSpecialistBegin = () => ({
  type: GET_ALL_SPECIALISTS_BEGIN,
  payload: {},
});

export const getAllSpecialistSuccess = (specialists) => ({
  type: GET_ALL_SPECIALISTS_SUCCESS,
  payload: { specialists },
});

export const getAllSpecialistFailure = (error) => ({
  type: GET_ALL_SPECIALISTS_FAILURE,
  payload: { error },
});

export const getAllServiceBegin = () => ({
  type: GET_ALL_SERVICES_BEGIN,
  payload: {},
});

export const getAllServiceSuccess = (services) => ({
  type: GET_ALL_SERVICES_SUCCESS,
  payload: { services },
});

export const getAllServiceFailure = (error) => ({
  type: GET_ALL_SERVICES_FAILURE,
  payload: { error },
});

export const selectedDaySuccess = (selectedDay) => ({
  type: SELECTED_DAY_SUCCESS,
  payload: { selectedDay },
});
export const makeCategorySuccess = (categoryId) => ({
  type: SET_CATEGORY_SUCCESS,
  payload: { categoryId },
});
export const setSelectedSlotSuccess = (selectedSlot) => ({
  type: SELECTED_SLOT_SUCCESS,
  payload: { selectedSlot },
});

export const createBookingSuccess = (booking) => ({
  type: CREATE_BOOKING_SUCCESS,
  payload: { booking },
});
export const createBookingBegin = () => ({
  type: CREATE_BOOKING_BEGIN,
  payload: {},
});
export const createBookingFailure = (error) => ({
  type: CREATE_BOOKING_FAILURE,
  payload: { error },
});

export const createAppointmentSuccess = (appointment) => ({
  type: CREATE_APPOINTMENT_SUCCESS,
  payload: { appointment },
});
export const createAppointmentBegin = () => ({
  type: CREATE_APPOINTMENT_BEGIN,
  payload: {},
});
export const createAppointmentFailure = (error) => ({
  type: CREATE_APPOINTMENT_FAILURE,
  payload: { error },
});

export async function apiReq(
  endpoint,
  data,
  method,
  headers,
  requestOptions = {}
) {
  const getTokenHeader = await getHeaders();
  headers = {
    ...getTokenHeader,
    ...headers,
  };

  if (method === "get" || method === "delete") {
    data = {
      ...requestOptions,
      ...data,
      headers,
    };
  }
  try {
    // console.log('ITS CALLED', "url:", endpoint, "data: ", data, "method: ", method)
    const result = await axios[method](endpoint, data, { headers });
    // console.log("API RESULT: ", result);
    if (result) {
      const { data } = result;
      // console.log("first data check: ", data);
      return data;
      // console.log("another check on data: ", data);
    }
  } catch (err) {
    if (err.response.data.success === false) return err.response.data;
    if (err && err.response && err.response.status == 401) {
      // clearUserData();
      // dispatch(clearState());
      // dispatch(noInternet());
    }

    return err;
  }
}

export function apiPost(endpoint, data, headers = {}) {
  // console.log("endpoint check: ", data);
  return apiReq(endpoint, data, "post", headers);
}

export function apiDelete(endPoint, data, headers = {}) {
  return apiReq(endPoint, data, "delete", headers);
}

export function apiGet(endPoint, data, headers = {}, requestOptions) {
  return apiReq(endPoint, data, "get", headers, requestOptions);
}

export function apiPut(endPoint, data, headers = {}) {
  return apiReq(endPoint, data, "put", headers);
}

export function setItem(key, data) {
  data = JSON.stringify(data);
  return AsyncStorage.setItem(key, data);
}

export async function getItem(key) {
  let result = await AsyncStorage.getItem(key);
  result = JSON.parse(result);
  return result;
}

export function removeItem(key) {
  return AsyncStorage.removeItem(key);
}

export function clearAsyncStorage(key) {
  return AsyncStorage.clear();
}

export async function setUserData(data) {
  data = JSON.stringify(data);
  return await AsyncStorage.setItem("userData", data);
}

export async function getUserData() {
  let result = await AsyncStorage.getItem("userData");
  result = JSON.parse(result);
  return result;
}
export async function clearUserData() {
  return AsyncStorage.removeItem("userData");
}

const utils = {
  isValidEmail,
  validateEmail,
  validatePassword,
  validateInput,
  calculateAngle,
  getItem,
  removeItem,
  clearUserData,
  getUserData,
  setUserData,
  clearAsyncStorage,
  setItem,
  apiDelete,
  apiPost,
  apiGet,
  apiPut,
  getHeaders,
  signUpBegin,
  signUpFailure,
  signUpSuccess,
  loginBegin,
  loginSuccess,
  loginFailure,
  getAllSpecialistBegin,
  getAllSpecialistFailure,
  getAllSpecialistSuccess,
  makePaymentBegin,
  makePaymentFailure,
  makePaymentSuccess,
};

export default utils;
