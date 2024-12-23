import axios from "axios";

export const svGetPayments = () => {
  return axios.get('getpayment').then((res) => res).catch((err) => err)
}