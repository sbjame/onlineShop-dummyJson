import axios from "axios";

const Api = axios.create({
    baseURL: 'https://dummyjson.com/',
    timeout: 5000,
});

export default Api;