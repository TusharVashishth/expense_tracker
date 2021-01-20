import { TOTAL_EXPENSE, TOTAL_EXPENSE_TOTAL } from "../actions/types"

const initialState = {
  expense: [],
  total: 0,
}

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOTAL_EXPENSE:
      return {
        expense: action.paylod,
      }

    case TOTAL_EXPENSE_TOTAL:
      return {
        ...state,
        total: action.paylod,
      }
    default:
      return state
  }
}

export default expenseReducer
