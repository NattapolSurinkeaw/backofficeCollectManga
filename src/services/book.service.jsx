import axios from "axios";

export const svGetBookAll = () => {
  return axios.get(`bookAll`).then((res) => res).catch((error) => error);
}