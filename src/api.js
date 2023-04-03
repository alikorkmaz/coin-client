import axios from "axios";

export default axios.create({
  baseURL: "http://ec2-52-67-99-93.sa-east-1.compute.amazonaws.com:3000"
});
