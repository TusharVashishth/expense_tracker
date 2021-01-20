import { CATEGORY } from "./types"
import axios from "axios"
import { categoryUrl } from "../../config/urls"
export const getCategory = () => (dispatch) => {
  axios
    .get(categoryUrl)
    .then((res) => {
      dispatch({
        type: CATEGORY,
        paylod: res.data,
      })
    })
    .catch((err) => console.log(err))
}
