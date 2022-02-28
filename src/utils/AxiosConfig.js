import axios from "axios";
const axiosApiInstance = axios.create({ baseURL: "http://localhost:5000" });

export default axiosApiInstance;
