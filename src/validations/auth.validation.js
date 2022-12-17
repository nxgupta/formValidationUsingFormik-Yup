import * as Yup from 'yup'
export const authValidation=Yup.object().shape({
    name:Yup.string().trim().required("Please enter your name."),
    email:Yup.string().trim().email().required("Please enter your email."),
    password:Yup.string().trim().min(8).required("Please enter your password."),
    confirm_password: Yup.string().required('Confirm password is required').oneOf([Yup.ref('password'), null], 'Passwords must match')
})