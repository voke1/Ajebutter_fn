import axios from "axios";
import { CREATE_APPOINTMENT } from "../../constants/url";
import {
  apiPost,
  createAppointmentBegin,
  createAppointmentFailure,
  createAppointmentSuccess,
} from "../../utils/Utils";

export function createAppointment(data) {
  return async (dispatch) => {
    dispatch(createAppointmentBegin());
    try {
      const appointment = await apiPost(CREATE_APPOINTMENT, data);
      if (appointment) {
        dispatch(createAppointmentSuccess(appointment));
        return appointment;
      }
      if (!appointment) dispatch(createAppointmentFailure(appointment.data));
    } catch (err) {
      dispatch(createAppointmentFailure(err.response.data));
      return err.response;
    }
  };
}

export function setAppointment(appointment) {
  return async (dispatch) => {
    dispatch(createAppointmentSuccess(appointment));
  };
}
