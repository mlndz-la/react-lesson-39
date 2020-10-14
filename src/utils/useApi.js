import { useState, useEffect, useReducer } from "react";

export const apiStatus = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  FAILED: "FAILED",
};

const updateState = (state, action) => {
  switch (action.type) {
    case apiStatus.LOADING:
      return {
        ...state,
        status: apiStatus.LOADING,
      };
    case apiStatus.SUCCESS:
      return {
        status: apiStatus.SUCCESS,
        data: action.payload,
        isDone: true,
      };
    case apiStatus.FAILED:
      return {
        ...state,
        status: apiStatus.FAILED,
        isDone: true,
      };
    default:
      return state;
  };
};

export const useAPI = () => {
  const [url, setUrl] = useState("");
  const [state, dispatch] = useReducer(updateState, {
    status: null,
    data: null,
    isDone: false,
  });
  useEffect(() => {
    const api = async () => {
      if (url !== "") {
        dispatch({ type: apiStatus.LOADING });
        try {
          const response = await fetch(url);
          const result = await response.json();
          dispatch({ type: apiStatus.SUCCESS, payload: result });
        } catch (error) {
          dispatch({ type: apiStatus.FAILED });
        }
      }
    };
    api();
  }, [url]);
  return [state, setUrl];
};
