import axios, { AxiosRequestConfig } from "axios";

// axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`;

axios.interceptors.request.use((request:AxiosRequestConfig)=>{
    const token = localStorage.getItem("token");
    if(token && request.headers){
        request.headers.Authorization =`Bearer ${token}` ;
        return request;
    }
    return request;

})

export default axios;