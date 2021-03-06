import toast from "react-hot-toast";
import axiosApiInstance from "utils/AxiosConfig";
import { errorToastLogger } from "utils/Util";

export const updateUsersPoints = async (data) => {
  try {
    const reqUrl = `/api/leaderboard/update-points`;
    const result = await axiosApiInstance.post(reqUrl, data);

    if (result.data.success) {
      toast.success("user points have been updated.");
      return true;
    }
    return false;
  } catch (error) {
    errorToastLogger("changeDetails", error);
    return false;
  }
};
