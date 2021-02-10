import React, { useCallback } from 'react';
import { createContext } from 'react';
import api from '../services/api';

interface IAuthContextState {
  token: string;
  logIn: ({ email, password }: IUserData) => Promise<void>;
  logOut: () => void;
};

export interface IUserData {
  email: string;
  password: string;
}

const AuthContext = createContext<IAuthContextState>({}  as IAuthContextState);

const AuthProvider: React.FC = ({ children }) => {

  const logIn = useCallback(async ({ email, password }: IUserData) => {
    const response = await api.post('sessions', {
      email, password
    });

    const { token } = response.data;

    localStorage.setItem('@PermissionRBAC: token', token);
  },[]);

  const logOut = useCallback(() => {
    localStorage.removeItem('@PermissionRBAC: token');
  },[]);

  return(
    <AuthContext.Provider value={{ token: '123456789', logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };