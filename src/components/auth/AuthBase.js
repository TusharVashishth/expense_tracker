import React from "react"
import Logo from "../../assets/images/logo.png"
import "./auth.css"
import { useHistory } from "react-router-dom"
const AuthBase = ({ children }) => {
  const history = useHistory()

  const redirectToHome = () => {
    history.push("/")
  }
  return (
    <div className="authBase">
      <div className="authBase__content">
        <div className="card card-body">
          <img
            src={Logo}
            alt="logo"
            className="authBase__img mx-auto"
            onClick={redirectToHome}
          />
          {children}
        </div>
      </div>
    </div>
  )
}

export default AuthBase
