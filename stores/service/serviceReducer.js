import * as authActionTypes from "../../constants/types";

const initialState = {
  services: [],
  error: null,
  loading: false,
  categoryId: "",
  cardSelected: {},
  aptmntBtnDisabled: true,
};

const serviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.GET_ALL_SERVICES_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.GET_ALL_SERVICES_SUCCESS:
      return {
        ...state,
        services: action.payload.services,
        loading: false,
      };
    case authActionTypes.GET_ALL_SERVICES_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    case authActionTypes.SET_CATEGORY_SUCCESS:
      return {
        ...state,
        categoryId: action.payload.categoryId,
      };
    case authActionTypes.SET_SELECTED_CARD:
      return {
        ...state,
        cardSelected: action.payload.cardSelected,
      };
    case authActionTypes.SET_APTMNT_BTN:
      return {
        ...state,
        aptmntBtnDisabled: action.payload.aptmntBtnDisabled,
      };

    default:
      return state;
  }
};

export default serviceReducer;
