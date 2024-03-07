import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { loginThunk } from '../../redux/auth/authOperations';
import { loginSchema } from 'schemas/loginSchema';

import Form from 'components/Form/Form';

import 'react-toastify/dist/ReactToastify.css';


export const LoginForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = data => {
    dispatch(loginThunk(data)).unwrap()
			.then(data => {
				toast.success(`Welcome back, ${data.user.name}!`)
				navigate('/contacts')
			})
			.catch(err => {
				 toast.error('Credentials is not valid!')
			})
  }
  return (
    <div><Form onDataSubmit={handleSubmit} formType='login' schema={loginSchema} /></div>
  )
}


