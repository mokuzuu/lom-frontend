import axios from "axios";

export const registerUser = (email: string, password: string) => {
  return axios
    .post("/signup", { email, password })
    .then((res) => {
      return res;
    })
    .then((v) => v)
    .catch((err) => err);
};

export const signInUser = (email: string, password: string) => {
  return axios
    .post("/signin", { email, password })
    .then((res) => {
      return res;
    })
    .catch((err) => err);
};

export const signOutUser = () => {
  return axios
    .post("/signout")
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => err);
};

export const testAuth = () => {
  return axios
    .get("/testAuthentication")
    .then((res) => res)
    .catch((err) => err);
};
