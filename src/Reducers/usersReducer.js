export default function usersReducer(state={
    firstName: '',
    lastName: '',
    email: '',
    registering: false,
    loggedIn: false,
    loggingIn: false 
  }, action) {
      
      const localStoredUser = localStorage.getItem("user") ? 
      JSON.parse(localStorage.getItem("user")) :
      localStorage.setItem("user", JSON.stringify({first_name: "", last_name: "", email: "", registering: false}))
      
      const loggedInFlag = localStorage.getItem("loggedIn") ? 
      JSON.parse(localStorage.getItem("loggedIn")) :
      localStorage.setItem("loggedIn", false)
      
      switch(action.type) {
          case 'ADD_USER':
              return {
                  ...state,
                  firstName: localStoredUser.first_name,
                  lastName: localStoredUser.last_name,
                  email: localStoredUser.email,
                  registering: false,
                  loggedIn: loggedInFlag
              }
          case 'REGISTERING_USER':
              return {
                  ...state,
                  registering: true
              }
              
          default: 
              return state;
      }
  };