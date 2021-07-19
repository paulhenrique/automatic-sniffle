import React from 'react'
import InputMask from 'react-input-mask';
const Input = ({ name, type = 'text', placeholder = '', label, value, helper, required = true, onInput, onClick, mask }, props,) => {
  return (
    <div className="mb-1">
      <label htmlFor={name} className="form-label">{label}</label>
      <InputMask
        type={type}
        mask={mask}
        placeholder={placeholder}
        className="form-control"
        id={name}
        value={value || ''}
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
