import React, { useState } from "react"
import AuthBase from "./AuthBase"
import { GoogleLogin } from "react-google-login"
import { Link, useLocation, useHistory } from "react-router-dom"
import { signinUser, signinWithGoogle } from "../../redux/actions/AuthActions"
import { useDispatch, useSelector } from "react-redux"
const Login = () => {
  const location = useLocation()
  const [values, setValues] = useState({
    email: "",
    password: "",
  })

  const { email, password } = values
  const errors = useSelector((state) => state.errors.errors)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value })
  }

  const submitForm = () => {
    dispatch(signinUser(values, history))
  }

  const responseGoogle = (response) => {
    const data = {
      access_token: response?.accessToken,
    }
    dispatch(signinWithGoogle(data, history))
  }
  return (
    <AuthBase>
      <div className="authLogin">
        <h6 className="text-success">{location.state?.message}</h6>
        <h3>Login</h3>
        <div className="auth__form">
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className={
                errors?.email ? "form-control is-invalid" : "form-control"
              }
              placeholder="Enter Email"
              value={email}
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
                errors?.password ? "form-control is-invalid" : "form-control"
              }
              placeholder="Enter Password"
              value={password}
              onChange={handleChange("password")}
            />
            {errors?.password?.map((error, index) => (
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
            Don't have an account?
            <Link to="/signup" className="ml-2">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </AuthBase>
  )
}

export default Login
