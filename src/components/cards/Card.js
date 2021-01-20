import React from "react"
import "./Card.css"
import { useHistory } from "react-router-dom"
const Card = ({ title, amount, bgColor, expensesList }) => {
  const history = useHistory()
  const goToList = () => {
    history.push({
      pathname: "/expenses",
      state: expensesList,
    })
  }
  return (
    <div
      onClick={goToList}
      className="customCard"
      style={{
        backgroundImage: bgColor,
      }}>
      <h3 className="text-center font-weight-bold">{title}</h3>
      <h1 className="text-center mt-4 font-weight-bolder">{amount}</h1>
    </div>
  )
}

export default Card
