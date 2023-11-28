import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

export const axiosSecure= axios.create({
    baseURL: 'http://localhost:5000',
})
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const {userLogout} = useAuth();
    axiosSecure.interceptors.request.use(
        config => {
            config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
            return config;
        },
        error => {
            return Promise.reject(error);
        }
    );


    axiosSecure.interceptors.response.use(response => {
        return response;
    }, async(error) => {   
        if(error.response.status === 401 || error.response.status === 403){
            await userLogout()
            .then(() => {
                navigate('/login');
            })
        }
        return Promise.reject(error);
    })

   return axiosSecure;
};

export default useAxiosSecure;