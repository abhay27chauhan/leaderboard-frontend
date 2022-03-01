import axios from "axios";
const axiosApiInstance = axios.create({
  baseURL: "https://backend-leaderboard.herokuapp.com",
});

export default axiosApiInstance;
