import axios from "axios";

export const axiosPublic = axios.create({
   baseURL: 'http://localhost:5000',
 // baseURL: 'https://save-life-server-gilt.vercel.app',
})

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;