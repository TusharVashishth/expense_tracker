import React from "react"
import { Navbar } from "react-bootstrap"
import Logo from "../../assets/images/logo.png"
import { Link, useHistory } from "react-router-dom"
import { logout } from "../../redux/actions/AuthActions"
const Nav = () => {
  const history = useHistory()
  return (
    <React.Fragment>
      <Navbar style={{ backgroundColor: "#3f3f3f" }} variant="dark" fixed="top">
        <Link to="/">
          <Navbar.Brand>
            <img
              alt=""
              src={Logo}
              width="30"
              height="30"
              style={{ borderRadius: "50%" }}
              className="d-inline-block align-top"
            />
            <span className="ml-2">Expense Tracker</span>
          </Navbar.Brand>
        </Link>
        <span className="text-white ml-auto" onClick={() => logout(history)}>
          <i className="fas fa-sign-in-alt"></i>
        </span>
      </Navbar>
    </React.Fragment>
  )
}

export default Nav
