import axios from "axios";

const instance  = axios.create({
    baseURL: "https://digitalmoney.digitalhouse.com/api"
    // baseURL: "http://localhost:3001/api"
})

export default instance