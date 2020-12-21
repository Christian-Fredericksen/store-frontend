import React from 'react';

const LoginForm = (props) => {

    const {
        handleChange,
        handleSubmit
    } = props
        
    return(
        <div>
            <h1>Login form</h1>
            <form onSubmit={handleSubmit} >
                <input onChange={handleChange} type="email" name="email" value={props.email} placeholder="email"/>
                <input onChange={handleChange} type="password" name="password" value={props.password} placeholder="password"/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default LoginForm;