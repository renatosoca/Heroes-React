import { createContext } from "react";
import { IUser } from "@/models";

export interface AuthContextProps {
  isAuthenticated: boolean;
  user: IUser | undefined;

  //FUNCTIONS
  login: (email: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);
