import {updateCart} from './cartActions';

export const addUser = (user) => {
    return {
        type: 'ADD_USER',
        payload: user
    }
}

export const registerUser = (userFormData) => {

    const { firstName, lastName, email, password, passwordConfirmation } = userFormData;
    
    return (dispatch) => {
        
        dispatch( { type: 'REGISTERING_USER'});

        fetch('http://localhost:3000/users', 
        {
          method: 'POST', 
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              user: {
                  first_name: firstName,
                  last_name: lastName,
                  email: email,
                  password: password,
                  password_confirmation: passwordConfirmation
              }
          }),
        }) 
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp) 
            if(resp.logged_in === true) {
                localStorage.setItem("user", JSON.stringify(resp.user))
                localStorage.setItem("cart", JSON.stringify(resp.cart))
                localStorage.setItem("loggedIn", JSON.stringify(resp.logged_in))
                dispatch(addUser(resp))
                dispatch(updateCart(resp.cart))
            }
        })
    }
}

export const loginUser = (userCredentials) => {

    const { email, password } = userCredentials;
    
    return (dispatch) => {

        fetch('http://localhost:3000/login', 
        {
          method: 'POST', 
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              user: {
                  email: email,
                  password: password
                }
            })
        }) 
        .then(resp => resp.json())
        .then(resp => {
            if(resp.logged_in === true) {
                console.log(resp)
                localStorage.setItem("user", JSON.stringify(resp.user))
                localStorage.setItem("cart", JSON.stringify(resp.cart))
                localStorage.setItem("loggedIn", JSON.stringify(resp.logged_in))

                dispatch(addUser(resp));
                dispatch(updateCart(resp));
            }
        })
    }
}

export const logoutUser = () => {

    return (dispatch) => {

        fetch('http://localhost:3000/logout', 
        {
            method: 'DELETE', 
            headers: { 
                'Content-Type': 'application/json'
            }
        })

        .then(resp => resp.json())
        .then(res => {
            localStorage.setItem("user", JSON.stringify({id: "", first_name: "", last_name: "", email: ""}))
            localStorage.setItem("loggedIn", "false")
            localStorage.setItem("cart", JSON.stringify({id: "", items: [], total: 0}))

            dispatch(updateCart(res));
            dispatch(addUser(res));
        })
    }
}