import { TODAY_EXPENSE, TODAY_EXPENSE_TOTAL } from "../actions/types"

const initialState = {
  todayExpense: [],
  todayTotal: 0,
}

const todayExpenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODAY_EXPENSE:
      return {
        todayExpense: action.paylod,
      }

    case TODAY_EXPENSE_TOTAL:
      return {
        ...state,
        todayTotal: action.paylod,
      }
    default:
      return state
  }
}

export default todayExpenseReducer
