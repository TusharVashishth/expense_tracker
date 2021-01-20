import React from "react"
import { Container, Button } from "react-floating-action-button"
import { useHistory } from "react-router-dom"
import "./FloatingButton.css"
function FloatingButton() {
  const history = useHistory()

  const addExpenseForm = () => {
    history.push("addExpense")
  }
  return (
    <Container>
      <Button
        // tooltip="The big plus button!"
        icon="fas fa-plus"
        // rotate={true}
        className="bg-logoColor"
        onClick={addExpenseForm}
      />
    </Container>
  )
}

export default FloatingButton
