import React from 'react';

const SignupForm = (props) => {

    const {
        handleChange,
        handleSubmit
    } = props
        
    return(
        <div>
            <h4>Signup form</h4>
            <form onSubmit={handleSubmit} >
                <input onChange={handleChange} type="text" name="firstName" value={props.firstName} placeholder="First Name" />
                <input onChange={handleChange} type="text" name="lastName" value={props.lastName} placeholder="Last Name"/>
                <input onChange={handleChange} type="email" name="email" value={props.email} placeholder="email"/>
                <input onChange={handleChange} type="password" name="password" value={props.password} placeholder="password"/>
                <input onChange={handleChange} type="password" name="passwordConfirmation" value={props.password_confirmation} placeholder="password confirmation"/>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}
export default SignupForm;