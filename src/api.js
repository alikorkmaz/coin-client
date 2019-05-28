import axios from "axios";

export default axios.create({
  baseURL: "http://coin-serv.herokuapp.com"
});
