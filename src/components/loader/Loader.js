import React from "react"
import "./Loader.css"
import { Spinner } from "react-bootstrap"
const Loader = () => {
  return (
    <div className="loader">
      <Spinner animation="grow" variant="success" />
      <h3> Loading...</h3>
    </div>
  )
}

export default Loader
