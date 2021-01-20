import { LAST_WEEK_EXPENSE, LAST_WEEK_EXPENSE_TOTAL } from "../actions/types"

const initialState = {
  weeklyExpense: [],
  weeklyTotal: 0,
}

const weeklyExpenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case LAST_WEEK_EXPENSE:
      return {
        weeklyExpense: action.paylod,
      }

    case LAST_WEEK_EXPENSE_TOTAL:
      return {
        ...state,
        weeklyTotal: action.paylod,
      }
    default:
      return state
  }
}

export default weeklyExpenseReducer
