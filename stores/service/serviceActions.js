import axios from "axios";
import { GET_ALL_SERVICE } from "../../constants/url";
import {
  apiPost,
  apiGet,
  getAllServiceBegin,
  getAllServiceFailure,
  getAllServiceSuccess,
  makeCategorySuccess,
  setCardSelectedSuccess,
  setAptmntBtnSuccess,
} from "../../utils/Utils";

export function getAllService() {
  return async (dispatch) => {
    dispatch(getAllServiceBegin());
    try {
      const services = await apiGet(GET_ALL_SERVICE);
      console.log("SERVICE HERE: ", services);
      if (services) {
        dispatch(getAllServiceSuccess(services));

        return services;
      }
      if (!services) dispatch(getAllServiceFailure(services.data));
    } catch (err) {
      dispatch(getAllServiceFailure(err.response.data));
      return err.response;
    }
  };
}

export function setCategory(category) {
  return async (dispatch) => {
    dispatch(makeCategorySuccess(category));
    // console.log("MY categoryS: ", category);
  };
}

export function setCardSelected(cardSelected) {
  return async (dispatch) => {
    dispatch(setCardSelectedSuccess(cardSelected));
    // console.log("MY categoryS: ", category);
  };
}

export function setAptmntBtn(aptmntBtnDisabled) {

  return async (dispatch) => {
    dispatch(setAptmntBtnSuccess(aptmntBtnDisabled));
  };
}
