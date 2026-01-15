import * as Yup from 'yup';

const loginSchema = Yup.object({
    email : Yup.string().email().required("Please enter your email id"),
    password: Yup.string().min(4).max(10).required("Please enter your password")
})


export default loginSchema;