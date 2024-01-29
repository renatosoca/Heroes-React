import { FC, PropsWithChildren, useReducer } from "react";
import { AuthContext, authReducer } from "./";
import { AuthState, IUser } from "@/models";
import { getLocalstore, removeLocalstore, setLocalstore } from "@/utils";

export const AUTH_INITIAL_STATE: AuthState = {
  isAuthenticated: false,
  user: undefined,
};

const init = (): AuthState => {
  const user = getLocalstore<IUser>("user");

  return {
    isAuthenticated: !!user,
    user,
  };
};

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE, init);

  const login = (email: string) => {
    const user: IUser = {
      id: 1,
      name: "Renato",
      lastname: "Soca",
      email,
      avatar: "RS",
      token: "12345",
    };

    try {
      setLocalstore("user", user);

      dispatch({
        type: "[Auth] - Login",
        payload: user,
      });
    } catch (error: any) {
      console.log(error);
    }
  };

  const logout = () => {
    try {
      removeLocalstore("user");

      dispatch({ type: "[Auth] - Logout" });
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,

        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
