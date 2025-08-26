import axios from "axios"

const instance = axios.create({
    baseURL: "https://us-central1-zaio-2c173.cloudfunctions.net/api"
});

export default instance;