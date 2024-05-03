import { POST_USER_EMAIL_ERROR, POST_USER_EMAIL_SUCCESS } from "./types";
// import axios from "axios";

export const postUser = (email) => async (dispatch) => {
  dispatch({ type: POST_USER_EMAIL_SUCCESS });
  try {
    // await axios.post(`${process.env.REACT_APP_SERVER_URL}/users`, {
    //   userId: email,
    // });
    console.log({ email });
    dispatch({
      type: POST_USER_EMAIL_SUCCESS,
    });
  } catch (error) {
    dispatch({ type: POST_USER_EMAIL_ERROR });
  }
};
