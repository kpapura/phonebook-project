import React from 'react'
import { InputContainer } from './Form.styled'

export const InputField = ({register, errors, label,name, placeholder}) => {
  return (
    <InputContainer>
            <label htmlFor={name}>{label}</label>
            <input
              id={name}
              placeholder={placeholder}
              {...register(name)}
            />
            {errors[name] && <span>{errors[name].message}</span>}
          </InputContainer>
  )
}
