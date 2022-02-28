import { useReducer, useEffect } from "react";
import toast from "react-hot-toast";

import initialState from "./initialState";
import fetchReducer from "./fetchReducer";
import { getLeaderboardData } from "api/getLeaderboardData";

const useFetch = (pageNumber, userId) => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    dispatch({ type: "LOADING" });

    const fetchUrl = async () => {
      const response = await getLeaderboardData(pageNumber, userId);
      if (response.success) {
        toast.success("data fetched");
        dispatch({
          type: "RESPONSE_COMPLETE",
          payload: { response: response },
        });
      } else {
        toast.error("Something went wrong!!");
        dispatch({ type: "ERROR", payload: { error: response.error } });
      }
    };

    fetchUrl();
  }, [pageNumber, userId]);

  return [state.result, state.loading, state.error];
};

export default useFetch;
