import React, { useState, useEffect } from "react"
import AuthBase from "./AuthBase"
import { GoogleLogin } from "react-google-login"
import { Link, useHistory } from "react-router-dom"
import { signupUser, signinWithGoogle } from "../../redux/actions/AuthActions"
import { useSelector, useDispatch } from "react-redux"
import { ERRORS } from "../../redux/actions/types"
const Signup = () => {
  const [values, setValues] = useState({
    email: "",
    password1: "",
    password2: "",
  })

  const dispatch = useDispatch()
  const history = useHistory()
  const errors = useSelector((state) => state.errors.errors)
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value })
  }

  const { email, password1, password2 } = values

  const submitForm = () => {
    dispatch(signupUser(values, history))
  }

  useEffect(() => {
    return () => {
      dispatch({
        type: ERRORS,
        paylod: {},
      })
    }
  }, [dispatch])

  const responseGoogle = (response) => {
    console.log(response?.accessToken)
    const data = {
      access_token: response?.accessToken,
    }
    dispatch(signinWithGoogle(data, history))
  }

  return (
    <AuthBase>
      <div className="authLogin">
        <h3>Sign up</h3>
        <div className="auth__form">
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              value={email}
              className={
                errors?.email ? "form-control is-invalid" : "form-control"
              }
              placeholder="Enter Email"
              onChange={handleChange("email")}
            />
            {errors?.email?.map((error, index) => (
              <span key={index} className="font-weight-bold text-danger">
                {error}
              </span>
            ))}
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className={
                errors?.password1 ? "form-control is-invalid" : "form-control"
              }
              placeholder="Enter Password"
              value={password1}
              onChange={handleChange("password1")}
            />
            {errors?.password1?.map((error, index) => (
              <span
                key={index}
                className="font-weight-bold text-danger d-block">
                {error}
              </span>
            ))}
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              className={
                errors?.password2 ? "form-control is-invalid" : "form-control"
              }
              placeholder="Confirm Password"
              value={password2}
              onChange={handleChange("password2")}
            />
            {errors?.non_field_errors?.map((error, index) => (
              <span key={index} className="font-weight-bold text-danger">
                {error}
              </span>
            ))}
          </div>
          <div className="form-group">
            <button className="btn bg-logoColor btn-block" onClick={submitForm}>
              Submit
            </button>
          </div>
          <p className="text-center">--OR--</p>
          <GoogleLogin
            clientId="913967645813-bdibs1j9o4r2j9vcq4ui796qg4d7plr7.apps.googleusercontent.com"
            buttonText="Continue with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            className="btn-block"
          />

          <p className="my-2">
            Already have an account?
            <Link to="/login" className="ml-2">
              Signin
            </Link>
          </p>
        </div>
      </div>
    </AuthBase>
  )
}

export default Signup
