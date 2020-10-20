import axios from "axios";

abstract class ApiService {
  private static api = axios.create({
    baseURL: "http://localhost:5000/",
  });

  get api() {
    return ApiService.api;
  }
}

export default ApiService;
