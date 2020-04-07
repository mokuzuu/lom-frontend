import axios from "axios";
import { AuthAction } from "store/index";
import { redirectTo } from "routes/config";
import history from "init/history";
export default () => {
  axios.defaults.baseURL = "http://localhost:3001/";
  axios.defaults.headers.post["Access-Control-Allow-Origin"] =
    "http://localhost:3001";
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
        error.response.config.url !== "/signin" &&
          error.response.config.url !== "/signup"
      ) {
        localStorage.setItem("Authorized", AuthAction.SignOut);
        alert("you are not authorised!");
        history.push(redirectTo);
      }
      return Promise.reject(error);
    }
  );
};
