import { combineReducers } from "redux"
import authReducer from "./authReducer"
import errorReducer from "./errorReducer"
import todayExpenseReducer from "./todayExpenseReducer"
import weeklyExpenseReducer from "./weeklyExpenseReducer"
import monthlyExpenseReducer from "./monthExpenseReducer"
import yearExpenseReducer from "./yearExpneseReducer"
import expenseReducer from "./expenseReducer"
import loaderReducer from "./loaderReducer"
import categoryReducer from "./categoryReducer"

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  todayExpense: todayExpenseReducer,
  weeklyExpense: weeklyExpenseReducer,
  monthlyExpense: monthlyExpenseReducer,
  yearExpense: yearExpenseReducer,
  expense: expenseReducer,
  loader: loaderReducer,
  category: categoryReducer,
})
