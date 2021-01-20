import React from "react"
import Base from "../components/layout/Base"
import { useLocation, useHistory } from "react-router-dom"
import Moment from "moment"
import { domain } from "../config/urls"

const ExpenseList = () => {
  const location = useLocation()
  const history = useHistory()
  const expenses = location?.state
  const subString = (str) => {
    if (str.length > 20) {
      const newStr = str.substring(0, 20)
      return newStr + ".."
    }
    return str
  }

  const editForm = (item) => {
    history.push({
      pathname: "/editExpense",
      state: item,
    })
  }
  return (
    <Base>
      <div className="row">
        {expenses?.length > 0 ? (
          expenses.map((item, index) => (
            <div className="col-6 col-sm-6 col-md-4 col-lg-3 " key={index}>
              <div className="expenseCard" onClick={() => editForm(item)}>
                <div className="d-flex justify-content-between">
                  <span className="font-weight-bold">
                    {subString(item.title)}
                  </span>
                  <img
                    src={domain + item.category.image}
                    alt="category"
                    className="expenseCard__img"
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <h3 className="text-danger">{item.amount}</h3>
                </div>
                <div className="d-flex justify-content-end">
                  <span>{Moment(item.created_at).format("MMM Do YYYY")}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div
            className="col-md-6 mx-auto d-flex justify-content-center align-items-center"
            style={{ height: "95vh" }}>
            <h5 className="text-success">No Expense Found 🙂</h5>
          </div>
        )}
      </div>
    </Base>
  )
}

export default ExpenseList
