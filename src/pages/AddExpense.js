import React, { useEffect, useState } from "react"
import Base from "../components/layout/Base"
import Footer from "../components/footer/Footer"
import { useDispatch, useSelector } from "react-redux"
import { getCategory } from "../redux/actions/CategoryAction"
import { addExpense } from "../redux/actions/ExpenseActions"
import { Link, useHistory } from "react-router-dom"
const AddExpense = () => {
  const [values, setValues] = useState({
    title: "",
    amount: "",
    category: "",
  })
  const history = useHistory()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategory())
  }, [dispatch])

  const categories = useSelector((state) => state.category?.category)
  const errors = useSelector((state) => state.errors.errors)
  const user_id = useSelector((state) => state.auth.user.user_id)

  useEffect(() => {
    if (categories?.length > 0) {
      setValues({ category: categories[0].id })
    }
  }, [categories])

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value })
  }

  const { title, amount, category } = values
  const submitExpense = () => {
    const data = {
      title: title,
      amount: amount,
      category: category,
      user: user_id,
    }

    dispatch(addExpense(data, history))
  }
  return (
    <Base>
      <div className="container-fluid">
        <h3 className="text-white text-center">Add Expense </h3>
        <div className="col-lg-6 mx-auto text-white">
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              className={
                errors?.title ? "form-control is-invalid" : "form-control"
              }
              placeholder="Enter Title"
              value={title}
              onChange={handleChange("title")}
            />
            <span className="font-weight-bold text-danger">
              {errors?.title?.[0]}
            </span>
          </div>

          <div className="form-group">
            <label>Amount</label>
            <input
              type="number"
              className={
                errors?.amount ? "form-control is-invalid" : "form-control"
              }
              placeholder="Enter Amount"
              value={amount}
              onChange={handleChange("amount")}
            />
            <span className="font-weight-bold text-danger">
              {errors?.amount?.[0]}
            </span>
          </div>

          <div className="form-group">
            <label>Category</label>
            <select
              value={category}
              onChange={handleChange("category")}
              className={
                errors?.category ? "form-control is-invalid" : "form-control"
              }>
              {categories?.length > 0 &&
                categories.map((item) => (
                  <option value={item.id} key={item.id}>
                    {item.name}
                  </option>
                ))}
            </select>
            <span className="font-weight-bold text-danger">
              {errors?.category?.[0]}
            </span>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <Link to="/" className="btn btn-success btn-block">
                  Back
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="form-group">
                <button
                  className="btn bg-logoColor btn-block"
                  onClick={submitExpense}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Base>
  )
}

export default AddExpense
