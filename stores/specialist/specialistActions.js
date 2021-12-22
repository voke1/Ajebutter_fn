import axios from "axios";
import { GET_ALL_SPECIALISTS } from "../../constants/url";
import {
  apiPost,
  apiGet,
  getAllSpecialistBegin,
  getAllSpecialistFailure,
  getAllSpecialistSuccess,
  setSelectedSpecialistSuccess,
} from "../../utils/Utils";

export function getAllSpecialist() {
  return async (dispatch) => {
    dispatch(getAllSpecialistBegin());
    try {
      const specialists = await apiGet(GET_ALL_SPECIALISTS);
      if (specialists) {
        dispatch(getAllSpecialistSuccess(specialists));

        return specialists;
      }
      if (!specialists) dispatch(getAllSpecialistFailure(specialists.data));
    } catch (err) {
      dispatch(getAllSpecialistFailure(err.response.data));
      return err.response;
    }
  };
}


export function setSelectedSpecialist(selectedSpecialist) {
  return async (dispatch) => {
    dispatch(setSelectedSpecialistSuccess(selectedSpecialist));
  };
}
