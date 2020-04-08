import axios from "axios";
import { AuthAction } from "store/index";
import { redirectTo, routes } from "routes/config";
import history from "init/history";
// const functions = require("firebase-functions");

export default () => {
  console.log(process.env);
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
  axios.defaults.headers.post["Access-Control-Allow-Origin"] =
    process.env.REACT_APP_BASE_URL;
  axios.defaults.withCredentials = true;

  // axios.defaults.headers.post["Content-type"] = "application/json";
  // Add a response interceptor
  axios.interceptors.response.use(
    function(response: any) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data

      return response;
    },
    function(error: any) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      console.log(error.response.status);
      if (
        error.response.status === 401 &&
        error.response.config.url !== routes.signIn &&
        error.response.config.url !== routes.signUp
      ) {
        localStorage.setItem("Authorized", AuthAction.SignOut);
        alert("you are not authorised!");
        history.push(redirectTo);
      }
      return Promise.reject(error);
    }
  );
};
