import React from "react"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import Login from "./components/auth/Login"
import Signup from "./components/auth/Signup"
import PrivateRoute from "./config/PrivateRoute"
import AddExpense from "./pages/AddExpense"
import EditExpense from "./pages/EditExpense"
import ExpenseList from "./pages/ExpenseList"
import Home from "./pages/Home"
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <PrivateRoute path="/" exact component={Home} />
        <PrivateRoute path="/addExpense" exact component={AddExpense} />
        <PrivateRoute path="/editExpense" exact component={EditExpense} />
        <PrivateRoute path="/expenses" exact component={ExpenseList} />
      </Switch>
    </Router>
  )
}

export default Routes
