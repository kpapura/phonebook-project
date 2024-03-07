import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, LinkBox, StyledNavLink, Wrapper } from './Form.styled';
import { InputField } from './InputContainer';
import { yupResolver } from '@hookform/resolvers/yup';
import { PassInput } from './PassInput';

const Form = ({ onDataSubmit, formType, schema }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submit = data => {
    onDataSubmit(data);
    reset();
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(submit)}>
        <h2>{formType === 'login' ? 'Login' : 'Register'}</h2>

        {formType !== 'login' && (
          <InputField
            register={register}
            errors={errors}
            label="Name:"
            placeholder="Enter your name..."
            name="name"
          />
        )}
        <InputField
          register={register}
          errors={errors}
          label="Email:"
          placeholder="Enter your email..."
          name="email"
        />
        <PassInput
          register={register}
          errors={errors}
          label="Password:"
          placeholder="Enter your pass..."
          name="password"
        />

        <Button>{formType === 'login' ? 'Login' : 'Register'}</Button>
        <LinkBox>
          {formType === 'login' ? (
            <StyledNavLink to="/register">Sign in!</StyledNavLink>
          ) : (
            <StyledNavLink to="/login">Sign up!</StyledNavLink>
          )}
        </LinkBox>
      </form>
    </Wrapper>
  );
};

export default Form;
