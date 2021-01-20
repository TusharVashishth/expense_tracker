import { LAST_YEAR_EXPENSE, LAST_YEAR_EXPENSE_TOTAL } from "../actions/types"

const initialState = {
  yearExpense: [],
  yearTotal: 0,
}

const yearExpenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case LAST_YEAR_EXPENSE:
      return {
        yearExpense: action.paylod,
      }

    case LAST_YEAR_EXPENSE_TOTAL:
      return {
        ...state,
        yearTotal: action.paylod,
      }
    default:
      return state
  }
}

export default yearExpenseReducer
