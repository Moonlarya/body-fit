import axios from "axios";

abstract class ApiService {
  private static api = axios.create({
    baseURL:
      process.env.NODE_ENV === "production"
        ? "https://body-fit.herokuapp.com/"
        : "http://localhost:5000/",
  });

  get api() {
    return ApiService.api;
  }
}

export default ApiService;
