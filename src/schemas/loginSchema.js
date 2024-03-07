import * as yup from 'yup'

export const loginSchema = yup.object({
	password: yup.string().required("Field is required!").max(18, 'Must be less than 18 chars').min(6, 'Pass must be more than 6 chars.'),
	email: yup.string().required("Field is required!").email('Email is not valid'),
})