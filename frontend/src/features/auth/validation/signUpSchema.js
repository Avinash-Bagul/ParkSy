import * as Yup from 'yup'


const signUpSchema = Yup.object ({
    name: Yup.string().required("Please enter your name"),
    phone_number: Yup.number().required("please enter Your Phone Number"),
    email: Yup.string().email().required("Plase enter your name"),
    password: Yup.string().min(4).max(10).required("Please enter your password"),
    role: Yup.string()
})


export default signUpSchema;