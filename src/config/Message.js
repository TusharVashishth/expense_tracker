import React, { useEffect, useState } from "react"
function Message({ message }) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShow(false)
    }, 3000)

    return () => {
      setShow(false)
    }
  }, [])
  return (
    <React.Fragment>
      {show && (
        <div className="alert alert-success">
          <strong>{message}</strong>
        </div>
      )}
    </React.Fragment>
  )
}

export default Message
