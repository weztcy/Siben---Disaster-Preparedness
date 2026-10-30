import axios from "axios";
import API_BASE_URL from "../../config";

export const FETCH_WEATHER_REQUEST = "FETCH_WEATHER_REQUEST";
export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";
export const FETCH_WEATHER_FAILURE = "FETCH_WEATHER_FAILURE";

export const fetchWeather = () => async (dispatch) => {
  dispatch({ type: FETCH_WEATHER_REQUEST });

  try {
    const response = await axios.get(`${API_BASE_URL}/weather`);
    dispatch({ type: FETCH_WEATHER_SUCCESS, payload: response.data });
  } catch (error) {
    console.error("fetchWeather error:", error);
    dispatch({ type: FETCH_WEATHER_FAILURE, payload: error.message });
  }
};
