import React from 'react'

function Label({ content, removeValue }) {

const labelStyle = {
  margin: '0.25rem',
}

  return (
<a className="ui label" style={labelStyle} onClick={(e) => removeValue(e)}>
  
  <i className="delete icon"></i>
  {content}
</a>
  )
}

export default Label