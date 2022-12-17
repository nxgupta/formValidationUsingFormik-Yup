import { useFormik } from "formik"
import { authValidation } from "../validations/auth.validation"
import { useState } from "react"
export default function RegistrationForm() {
    let [loggedIn,setLoggedIn]=useState(false)
    const {errors,touched,handleBlur,handleChange,handleSubmit,values}=useFormik({
        initialValues:{
            name:"",
            email:"",
            password:"",
            confirm_password:""
        },
        validationSchema: authValidation,
        onSubmit:(values,action)=>{
            action.resetForm()
            setLoggedIn(true)
        }
    })
    if(loggedIn){
        return(<div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh',backgroundColor:"black",color:"white"}}><h2>You have been logged successfully!!</h2></div>)
    }
    
    return (
        <>
            <div className="container">
                <div className="modal">
                    <div className="modal-container">
                        <div className="modal-left">
                            <h1 className="modal-title">Welcome!</h1>
                            <p className="modal-desc">
                                Registration Form
                            </p>
                            <form onSubmit={handleSubmit}>
                                <div className="input-block">
                                    <label htmlFor="name" className="input-label">
                                        Name
                                    </label>
                                    <input
                                        type="name"
                                        autoComplete="off"
                                        name="name"
                                        id="name"
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Name"
                                    />
                                    {errors.name && touched.name?<p className="form-error">{errors.name}</p>:null}
                                </div>
                                <div className="input-block">
                                    <label htmlFor="email" className="input-label">
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        autoComplete="off"
                                        name="email"
                                        id="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Email"
                                    />
                                    {errors.email && touched.email?<p className="form-error">{errors.email}</p>:null}
                                </div>
                                <div className="input-block">
                                    <label htmlFor="password" className="input-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        autoComplete="off"
                                        name="password"
                                        id="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Password"
                                    />
                                    {errors.password && touched.password?<p className="form-error">{errors.password}</p>:null}
                                </div>
                                <div className="input-block">
                                    <label htmlFor="confirm_password" className="input-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        autoComplete="off"
                                        name="confirm_password"
                                        id="confirm_password"
                                        value={values.confirm_password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Confirm Password"
                                    />
                                    {errors.confirm_password && touched.confirm_password?<p className="form-error">{errors.confirm_password}</p>:null}
                                </div>
                                <div className="modal-buttons">
                                    <span>Want to register using <a href="#" className="">Gmail?</a></span>
                                    
                                    <button className="input-button" type="submit">
                                        Registration
                                    </button>
                                </div>
                            </form>
                            <p className="sign-up">
                                Already have an account? <a href="#">Sign In now</a>
                            </p>
                        </div>
                        <div className="modal-right">
                            <img
                                src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}