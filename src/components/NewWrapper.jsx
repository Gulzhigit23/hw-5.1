import React from 'react'

function NewWrapper(props) {
  return (
    <div className="words">{props.children}</div>
  )
}

export default NewWrapper