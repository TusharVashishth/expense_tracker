import { USER_LOGIN } from "../actions/types"
const initialState = {
  isAuthenticated: false,
  user: [],
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        isAuthenticated: true,
        user: action.paylod,
      }
    default:
      return state
  }
}
export default authReducer
