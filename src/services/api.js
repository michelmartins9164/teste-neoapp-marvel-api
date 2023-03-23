import axios from "axios";
import config from "../config/config";
import md5 from "md5";

const api = axios.create({
    baseURL: "http://gateway.marvel.com/v1/public",
})

const hash = md5(config.date + config.PrivateKey + config.PublicKey);
export const configUrl = `ts=${config.date}&apikey=${config.PublicKey}&hash=${hash}`
export default api;