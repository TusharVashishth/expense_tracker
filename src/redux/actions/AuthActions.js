import axios from "axios"
import { signupUrl, signinUrl, googleSignin } from "../../config/urls"
import { ERRORS, USER_LOGIN } from "./types"
import setAxiosheader from "../../config/setAxiosheader"
import jwtDecode from "jwt-decode"

export const signupUser = (data, history) => (dispatch) => {
  axios
    .post(signupUrl, data)
    .then(() =>
      history.push({
        pathname: "/login",
        state: {
          message: "You have successfully registered.Please Login",
        },
      })
    )
    .catch((err) =>
      dispatch({
        type: ERRORS,
        paylod: err.response?.data,
      })
    )
}

export const signinUser = (data, history) => (dispatch) => {
  axios
    .post(signinUrl, data)
    .then((res) => {
      const token = res.data?.access_token
      localStorage.setItem("loginToken", token)
      setAxiosheader("Bearer " + token)
      const decode = jwtDecode(token)
      dispatch({
        type: USER_LOGIN,
        paylod: decode,
      })

      history.push("/")
    })
    .catch((err) =>
      dispatch({
        type: ERRORS,
        paylod: err.response?.data,
      })
    )
}

export const logout = (history) => {
  setAxiosheader("")
  localStorage.removeItem("loginToken")
  history.push("/login")
}

export const signinWithGoogle = (access_token, history) => (dispatch) => {
  axios
    .post(googleSignin, access_token)
    .then((res) => {
      const token = res.data?.access_token
      localStorage.setItem("loginToken", token)
      setAxiosheader("Bearer " + token)
      const decode = jwtDecode(token)
      dispatch({
        type: USER_LOGIN,
        paylod: decode,
      })

      history.push("/")
    })
    .catch((err) => console.log(err))
}
