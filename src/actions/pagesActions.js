// src/actions/pagesActions.js
import axios from "axios";
import { setPageData } from "../reducers/pagesReducer";

export const fetchPageData = () => {
  const apiUrl = process.env.REACT_APP_API_URL;

  // Implement your API request logic here to fetch page data
  return async (dispatch) => {
    try {
      const response = await axios.get(`${apiUrl}/api/pages`);
      const data = response.data; // Access data directly from response
      dispatch(setPageData(data));
    } catch (error) {
      console.error("Error fetching page data:", error);
    }
  };
};
