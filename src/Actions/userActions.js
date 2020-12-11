export const addUser = (user) => {
    return {
        type: 'ADD_USER',
        payload: user
        // ditch the payload and argument
    }
}

const userLogoutAction = () => {
    return {
        type: 'LOGOUT_USER'
    }
}