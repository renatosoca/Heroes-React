import { useReducer, createContext } from "react"
import { types } from "../types/types";
import { authReducer } from "./authReducer";

export const AuthContext = createContext();

const initialState = {
  logged: false,
}

const init = () => {
  const user = JSON.parse( localStorage.getItem( 'user' ) ) || initialState;
  return {
    logged: !!user,
    user
  }
}

export const AuthProvider = ({ children }) => {

  const [ authState, dispatch ] = useReducer( authReducer, initialState, init )

  const login = async ( name = '' ) => {
    const user = { id: 1, name };

    const action = {
      type: types.login,
      payload: user
    }

    localStorage.setItem( 'user', JSON.stringify( user ) );

    dispatch( action );
  }
  console.log(authState)

  const logout = () => {
    const action = {
      type: types.logout,
      payload: {
        id: null,
      }
    }

    localStorage.removeItem( 'user' );

    dispatch( action );
  }

  return (
    <AuthContext.Provider value={{
      ...authState,
      login,  
      logout
    }}>
      { children }
    </AuthContext.Provider>
  )
}