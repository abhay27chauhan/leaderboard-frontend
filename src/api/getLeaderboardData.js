import { errorToastLogger } from "utils/Util";
import axiosApiInstance from "utils/AxiosConfig";

export const getLeaderboardData = async (pageNumber = 1, currentUser) => {
  try {
    let reqUrl = `/api/leaderboard?pageNumber=${pageNumber}`;
    reqUrl = currentUser ? `${reqUrl}&currentUser=${currentUser}` : reqUrl;

    const result = await axiosApiInstance.get(reqUrl);
    return result.data;
  } catch (error) {
    console.log(error);
    errorToastLogger("getLeaderboardData", error);
    return { success: false, error };
  }
};
