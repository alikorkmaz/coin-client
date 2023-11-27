import axios from "axios";

export default axios.create({
  baseURL: "http://ec2-18-231-193-234.sa-east-1.compute.amazonaws.com:3000"
});
