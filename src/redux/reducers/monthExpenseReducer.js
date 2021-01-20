import { LAST_MONTH_EXPENSE, LAST_MONTH_EXPENSE_TOTAL } from "../actions/types"

const initialState = {
  monthlyExpense: [],
  monthlyTotal: 0,
}

const monthlyExpenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case LAST_MONTH_EXPENSE:
      return {
        monthlyExpense: action.paylod,
      }

    case LAST_MONTH_EXPENSE_TOTAL:
      return {
        ...state,
        monthlyTotal: action.paylod,
      }
    default:
      return state
  }
}

export default monthlyExpenseReducer
