import React from 'react'

const Input = ({ name, type = 'text', placeholder = '', label, helper, required = true, onInput, onClick }, props,) => {
  return (
    <div className="mb-1">
      <label htmlFor={name} className="form-label">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="form-control"
        id={name}
        onClick={onClick}
        onInput={onInput}
        required={required}
        {...props}
        aria-describedby={`${name}Help`}
      />
      <div id={`${name}Help`} className="form-text">{helper}</div>
    </div>
  )
}

export default Input
