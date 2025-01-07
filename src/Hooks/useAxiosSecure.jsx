
import axios from "axios";

const axiosSecure=axios.create({
    // baseURL:"https://computer-accessories-shop-backend.vercel.app/api/v1"
    baseURL:"http://localhost:5000/api/v1"
})
const useAxiosSecure = () => {

    return axiosSecure
};

export default useAxiosSecure;