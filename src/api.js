import axios from "axios";

export default axios.create({
  baseURL: "https://coin-serv.herokuapp.com"
});
