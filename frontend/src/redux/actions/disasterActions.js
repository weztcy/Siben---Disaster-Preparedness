import axios from "axios";
import API_BASE_URL from "../../config";

export const FETCH_DISASTERS_REQUEST = "FETCH_DISASTERS_REQUEST";
export const FETCH_DISASTERS_SUCCESS = "FETCH_DISASTERS_SUCCESS";
export const FETCH_DISASTERS_FAILURE = "FETCH_DISASTERS_FAILURE";

export const fetchDisasters = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_DISASTERS_REQUEST });
    try {
      const response = await axios.get(`${API_BASE_URL}/disasters`);
      dispatch({ type: FETCH_DISASTERS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_DISASTERS_FAILURE, error });
    }
  };
};
