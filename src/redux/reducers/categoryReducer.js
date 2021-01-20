import { CATEGORY } from "../actions/types"

const initialState = {
  category: [],
}

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY:
      return {
        category: action.paylod,
      }
    default:
      return state
  }
}

export default categoryReducer
