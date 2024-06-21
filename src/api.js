import axios from "axios";

export default axios.create({
  baseURL: "http://ec2-15-228-58-25.sa-east-1.compute.amazonaws.com:3000"
});
