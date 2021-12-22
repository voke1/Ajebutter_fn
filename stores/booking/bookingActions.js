import axios from "axios";
import { CREATE_BOOKING } from "../../constants/url";
import {
  apiPost,
  createBookingBegin,
  createBookingFailure,
  createBookingSuccess,
  selectedDaySuccess,
  setSelectedSlotSuccess,
} from "../../utils/Utils";

export function createBooking(data) {
  return async (dispatch) => {
    dispatch(createBookingBegin());
    try {
      const booking = await apiPost(CREATE_BOOKING, data);
      if (booking) {
        dispatch(createBookingSuccess(booking));
        return booking;
      }
      if (!booking) dispatch(createBookingFailure(booking.data));
    } catch (err) {
      dispatch(createBookingFailure(err.response.data));
      return err.response;
    }
  };
}

export function setBooking(booking) {
  return async (dispatch) => {
    dispatch(createBookingSuccess(booking));
    console.log("MY BOOKING: ", booking)
  };
}

export function setSelectedDay(selectedDay) {
  return async (dispatch) => {
    dispatch(selectedDaySuccess(selectedDay));
  };
}

export function setSelectedSlot(selectedSlot) {
  return async (dispatch) => {
    dispatch(setSelectedSlotSuccess(selectedSlot));
  };
}

export function setMarkedDates(markedDates) {
  return async (dispatch) => {
    dispatch(markedDatesSuccess(markedDates));
  };
}