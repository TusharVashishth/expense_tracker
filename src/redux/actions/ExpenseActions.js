import {
  TODAY_EXPENSE,
  LAST_WEEK_EXPENSE,
  LAST_YEAR_EXPENSE,
  LAST_MONTH_EXPENSE,
  LAST_WEEK_EXPENSE_TOTAL,
  TOTAL_EXPENSE_TOTAL,
  LAST_YEAR_EXPENSE_TOTAL,
  LAST_MONTH_EXPENSE_TOTAL,
  TODAY_EXPENSE_TOTAL,
  TOTAL_EXPENSE,
  IS_LOADING,
  ERRORS,
} from "./types"

import {
  todayExpenseUrl,
  weekExpenseUrl,
  monthExpenseUrl,
  yearExpenseUrl,
  expenseUrl,
} from "../../config/urls"
import axios from "axios"

export const addExpense = (data, history) => (dispatch) => {
  axios
    .post(expenseUrl, data)
    .then(() => {
      history.push({
        pathname: "/",
        state: {
          message: "Expense Added successfully.",
        },
      })
    })
    .catch((err) => dispatch({ type: ERRORS, paylod: err.response?.data }))
}

export const editExpense = (data, id, history) => (dispatch) => {
  axios
    .put(expenseUrl + id + "/", data)
    .then(() => {
      history.push({
        pathname: "/",
        state: {
          message: "Expense Edit successfully.",
        },
      })
    })
    .catch((err) => dispatch({ type: ERRORS, paylod: err.response?.data }))
}

export const deleteExpense = (id, history) => (dispatch) => {
  axios
    .delete(expenseUrl + id + "/")
    .then(() => {
      history.push({
        pathname: "/",
        state: {
          message: "Expense Deleted successfully.",
        },
      })
    })
    .catch((err) => dispatch({ type: ERRORS, paylod: err.response?.data }))
}
export const todayExpense = (user_id) => (dispatch) => {
  dispatch({ type: IS_LOADING, paylod: true })
  axios
    .post(todayExpenseUrl, { user_id: user_id })
    .then((res) => {
      dispatch({ type: IS_LOADING, paylod: false })
      let total = 0
      if (res.data?.length > 0) {
        res.data.map((item) => {
          return (total = total + item.amount)
        })
      }
      dispatch({
        type: TODAY_EXPENSE,
        paylod: res.data,
      })

      dispatch({
        type: TODAY_EXPENSE_TOTAL,
        paylod: total,
      })
    })
    .catch((err) => console.log(err))
}

export const weeklyExpense = (user_id) => (dispatch) => {
  dispatch({ type: IS_LOADING, paylod: true })
  axios
    .post(weekExpenseUrl, { user_id: user_id })
    .then((res) => {
      dispatch({ type: IS_LOADING, paylod: false })
      let total = 0
      if (res.data?.length > 0) {
        res.data.map((item) => {
          return (total = total + item.amount)
        })
      }
      dispatch({
        type: LAST_WEEK_EXPENSE,
        paylod: res.data,
      })

      dispatch({
        type: LAST_WEEK_EXPENSE_TOTAL,
        paylod: total,
      })
    })
    .catch((err) => console.log(err))
}

export const monthExpense = (user_id) => (dispatch) => {
  dispatch({ type: IS_LOADING, paylod: true })
  axios
    .post(monthExpenseUrl, { user_id: user_id })
    .then((res) => {
      dispatch({ type: IS_LOADING, paylod: false })
      let total = 0
      if (res.data?.length > 0) {
        res.data.map((item) => {
          return (total = total + item.amount)
        })
      }
      dispatch({
        type: LAST_MONTH_EXPENSE,
        paylod: res.data,
      })

      dispatch({
        type: LAST_MONTH_EXPENSE_TOTAL,
        paylod: total,
      })
    })
    .catch((err) => console.log(err))
}

export const yearExpense = (user_id) => (dispatch) => {
  dispatch({ type: IS_LOADING, paylod: true })
  axios
    .post(yearExpenseUrl, { user_id: user_id })
    .then((res) => {
      dispatch({ type: IS_LOADING, paylod: false })
      let total = 0
      if (res.data?.length > 0) {
        res.data.map((item) => {
          return (total = total + item.amount)
        })
      }
      dispatch({
        type: LAST_YEAR_EXPENSE,
        paylod: res.data,
      })

      dispatch({
        type: LAST_YEAR_EXPENSE_TOTAL,
        paylod: total,
      })
    })
    .catch((err) => console.log(err))
}

export const expense = (user_id) => (dispatch) => {
  axios
    .get(expenseUrl + `?user=${user_id}`)
    .then((res) => {
      dispatch({ type: IS_LOADING, paylod: false })
      let total = 0
      if (res.data?.length > 0) {
        res.data?.map((item) => {
          return (total = total + item.amount)
        })
      }
      dispatch({
        type: TOTAL_EXPENSE,
        paylod: res.data,
      })

      dispatch({
        type: TOTAL_EXPENSE_TOTAL,
        paylod: total,
      })
    })
    .catch((err) => console.log(err))
}
