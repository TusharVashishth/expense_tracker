import "./App.css"
import Routes from "./Routes"
import setAxiosHeader from "./config/setAxiosheader"
import jwtDecode from "jwt-decode"
import { useDispatch } from "react-redux"
import { USER_LOGIN } from "./redux/actions/types"
function App() {
  const dispatch = useDispatch()
  const token = localStorage.getItem("loginToken")
  if (token) {
    const bearerToken = "Bearer " + token
    setAxiosHeader(bearerToken)
    const decode = jwtDecode(token)
    dispatch({
      type: USER_LOGIN,
      paylod: decode,
    })
  }
  return (
    <div className="app">
      <Routes />
    </div>
  )
}

export default App
