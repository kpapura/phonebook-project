import React from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/auth/authOperations';
import { toast } from 'react-toastify';
import Form from 'components/Form/Form';
import { useNavigate } from 'react-router-dom';
import { registerSchema } from 'schemas/registerSchema';

export const RegisterForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = data => {
    dispatch(registerThunk(data)).unwrap()
			.then(() => {
        navigate('/contacts')
        toast.success(`Welcome, ${data.name}`)
			})
  }
  return (
    <div><Form onDataSubmit={handleSubmit} schema={registerSchema} /></div>
  )
}



