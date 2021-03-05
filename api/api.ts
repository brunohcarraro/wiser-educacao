import axios from "axios";

const api = axios.create({
  baseURL: "https://604262757f50e000173ac372.mockapi.io",
});

export default api;