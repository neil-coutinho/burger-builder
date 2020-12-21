import axios from "axios";

const axiosHelper = axios.create({
    baseURL: "https://buger-builder-react-default-rtdb.firebaseio.com/"
});

export { axiosHelper };