export const SET_BOOK_BUTTON_VISIBILITY = "SET_BOOK_BUTTON_VISIBILITY";

export const setBookButtonEnableSuccess = (isEnabled) => ({
  type: SET_BOOK_BUTTON_VISIBILITY,
  payload: { isEnabled },
});

export function setBookButtonEnable(isEnabled) {
  return (dispatch) => {
    dispatch(setBookButtonEnableSuccess(isEnabled));
  };
}
