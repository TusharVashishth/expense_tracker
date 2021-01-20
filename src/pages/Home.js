import React, { useEffect, Fragment } from "react"
import Card from "../components/cards/Card"
import FloatingButton from "../components/floatButton/FloatingButton"
import Base from "../components/layout/Base"
import Message from "../config/Message"
import {
  todayExpense,
  weeklyExpense,
  monthExpense,
  yearExpense,
  expense,
} from "../redux/actions/ExpenseActions"
import { useSelector, useDispatch } from "react-redux"
import Loader from "../components/loader/Loader"
import { useLocation } from "react-router-dom"
const Home = () => {
  const user_id = useSelector((state) => state.auth?.user?.user_id)
  const dispatch = useDispatch()
  const location = useLocation()

  const _todayExpense = useSelector((state) => state.todayExpense)
  const _weeklyExpense = useSelector((state) => state.weeklyExpense)
  const _monthlyExpence = useSelector((state) => state.monthlyExpense)
  const _yearExpense = useSelector((state) => state.yearExpense)
  const _totalExpense = useSelector((state) => state.expense)
  const isLoading = useSelector((state) => state.loader.isLoading)

  useEffect(() => {
    if (location?.state?.message || _todayExpense?.todayExpense.length === 0) {
      dispatch(todayExpense(user_id))
    }
    if (
      location?.state?.message ||
      _weeklyExpense?.weeklyExpense.length === 0
    ) {
      dispatch(weeklyExpense(user_id))
    }
    if (
      location?.state?.message ||
      _monthlyExpence?.monthlyExpense.length === 0
    ) {
      dispatch(monthExpense(user_id))
    }
    if (location?.state?.message || _yearExpense?.yearExpense.length === 0) {
      dispatch(yearExpense(user_id))
    }
    if (location?.state?.message || _totalExpense?.expense.length === 0) {
      dispatch(expense(user_id))
    }
  }, [user_id, dispatch])
  return (
    <Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <Base>
          {location?.state?.message && (
            <Message message={location?.state?.message} />
          )}

          <div className="row mt-3">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <Card
                title="Today Expense"
                amount={_todayExpense?.todayTotal}
                bgColor="linear-gradient(to right, #4facfe 0%, #00f2fe 100%)"
                expensesList={_todayExpense?.todayExpense}
              />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <Card
                title="Last Week Expense"
                amount={_weeklyExpense?.weeklyTotal}
                bgColor="linear-gradient(to right, #43e97b 0%, #38f9d7 100%)"
                expensesList={_weeklyExpense?.weeklyExpense}
              />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <Card
                title="Last Month Expense"
                amount={_monthlyExpence?.monthlyTotal}
                bgColor="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                expensesList={_monthlyExpence?.monthlyExpense}
              />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <Card
                title="Last Year Expense"
                amount={_yearExpense?.yearTotal}
                bgColor="linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%)"
                expensesList={_yearExpense?.yearExpense}
              />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <Card
                title="Total Expense"
                amount={_totalExpense?.total}
                bgColor="linear-gradient(to top, #09203f 0%, #537895 100%)"
                expensesList={_totalExpense?.expense}
              />
            </div>
          </div>
          <FloatingButton />
        </Base>
      )}
    </Fragment>
  )
}

export default Home
