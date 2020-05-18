import axios from "axios";

const instance = axios.create({
  baseURL: "http://shopsoup.herokuapp.com/api/v1/product",
});

export default instance;
