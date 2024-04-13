import axios from "axios";

export default axios.create({
  baseURL: "http://ec2-54-207-24-64.sa-east-1.compute.amazonaws.com:3000"
});
