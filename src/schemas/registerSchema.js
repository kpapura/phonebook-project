import * as yup from 'yup'

export const registerSchema = yup.object({
	name: yup
		.string()
		.required('Field is required!')
		.max(12, 'Must be less than 12 chars')
		.min(3, 'Name must be more than 3 chars.'),
	password: yup.string().required('Field is required!').max(18, 'Must be less than 18 chars').min(6, 'Pass must be more than 6 chars.'),
	email: yup.string().required('Field is required!').email('Email is not valid'),
})