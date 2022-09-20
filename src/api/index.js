import request from "../utils/request";
import axios from "axios";

export const wordCloud = () => axios.get("/screen/wordcloud");
export const mapScatter = () => axios.get("/screen/mapscatter");
export const screenData = () => axios.get("/screen/screendata");
