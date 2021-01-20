import React from "react"
import Nav from "../navbar/Nav"
import "./Base.css"
const Base = ({ children }) => {
  return (
    <div className="base">
      <Nav />
      <div className="base__content">{children}</div>
    </div>
  )
}

export default Base
