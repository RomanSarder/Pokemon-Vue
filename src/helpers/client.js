import axios from "axios";

const API_URL = "http://pokeapi.co/api/v2"

export default async function request (url, config = {}) {
    try {
        console.log("LOADING", url, config);
        let response = await axios({
        url: API_URL + url,
        ...config
        });
        return response.data;
    } catch (e) {
        console.log(e);
    }   
}