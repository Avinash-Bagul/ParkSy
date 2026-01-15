import * as Yup from 'yup'


const signUpSchema = Yup.object ({
    fname: Yup.string().required("Please enter your name"),
    phone_number: Yup.number().required("please enter Your Phone Number"),
    email: Yup.string().email().required("Plase enter your name"),
    password: Yup.string().min(4).max(10).required("Please enter your password")
})


export default signUpSchema;