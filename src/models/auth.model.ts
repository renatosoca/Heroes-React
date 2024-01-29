export interface IUser {
  id: number;
  name: string;
  lastname: string;
  email: string;
  avatar: string;
  token: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: IUser | undefined;
}
