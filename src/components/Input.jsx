import React from 'react'

function Input({ name, type = 'text', placeholder = '', label, helper }, props) {
  return (
    <div className="mb-1">
      <label htmlFor={name} className="form-label">{label}</label>
      <input
        {...props}
        type={type}
        placeholder={placeholder}
        className="form-control"
        id={name}
        aria-describedby={`${name}Help`} />
      <div id={`${name}Help`} className="form-text">{helper}</div>
    </div>
  )
}

export default Input
