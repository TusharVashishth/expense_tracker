import React, { useState, useEffect } from "react"
import { useLocation, useHistory, Link } from "react-router-dom"
import Base from "../components/layout/Base"
import Footer from "../components/footer/Footer"
import { useDispatch, useSelector } from "react-redux"
import { getCategory } from "../redux/actions/CategoryAction"
import { deleteExpense, editExpense } from "../redux/actions/ExpenseActions"

const EditExpense = () => {
  const location = useLocation()
  const history = useHistory()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategory())
  }, [dispatch])
  const [values, setValues] = useState({
    title: "",
    amount: "",
    category: "",
    id: "",
  })

  const categories = useSelector((state) => state.category.category)
  const errors = useSelector((state) => state.errors.errors)
  const user_id = useSelector((state) => state.auth.user.user_id)

  useEffect(() => {
    const data = location?.state
    if (data) {
      setValues({
        title: data?.title,
        amount: data?.amount,
        category: data?.category.id,
        id: data?.id,
      })
    }
  }, [])

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value })
  }

  const { title, amount, category, id } = values
  const submitExpense = () => {
    const data = {
      title: title,
      amount: amount,
      category: category,
      user: user_id,
    }
    dispatch(editExpense(data, id, history))
  }
  return (
    <Base>
      <div className="container-fluid mt-4">
        <h3 className="text-white text-center">Edit Expense </h3>
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
            <div className="col-lg-4">
              <div className="form-group">
                <Link to="/" className="btn btn-success btn-block">
                  Back
                </Link>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="form-group">
                <button
                  className="btn bg-logoColor btn-block"
                  onClick={submitExpense}>
                  Submit
                </button>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-group">
                <button
                  className="btn btn-danger btn-block"
                  onClick={() => dispatch(deleteExpense(id, history))}>
                  Delete
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

export default EditExpense
