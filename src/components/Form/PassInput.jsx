import React, { useState } from 'react';
import { IconBtn, InputContainer } from './Form.styled';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export const PassInput = ({ register, errors, label, name, placeholder }) => {
  const [type, setType] = useState('password');

  return (
    <InputContainer>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        placeholder={placeholder}
        {...register(name)}
        type={type}
      />
      <IconBtn onClick={() => setType(type === 'password' ? 'text' : 'password')}>
        {type === 'password' ? <FaEyeSlash /> : <FaEye />}
      </IconBtn>
      {errors[name] && <span>{errors[name].message}</span>}
    </InputContainer>
  );
};
