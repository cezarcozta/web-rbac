import React, { useCallback, useContext, useState } from 'react';
import { createContext } from 'react';
import api from '../services/api';

interface IAuthContextState {
  token: ITokenState;
  logIn: ({ email, password }: IUserData) => Promise<void>;
  logOut: () => void;
  isLogged: () => boolean;
};

export interface IUserData {
  email: string;
  password: string;
}

interface ITokenState {
  token: string;
}

const AuthContext = createContext<IAuthContextState>({}  as IAuthContextState);

const AuthProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState<ITokenState>(() => {
    const token = localStorage.getItem('@PermissionRBAC:token');

    if(token) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token };
    }

    return {} as ITokenState;
  });

  const logIn = useCallback(async ({ email, password }: IUserData) => {
    const response = await api.post('sessions', {
      email, 
      password,
    }); 

    const { token } = response.data;
    
    setToken(token);
    
    localStorage.setItem('@PermissionRBAC:token', token);
  },[]);

  const isLogged = useCallback(() => {
    const token = localStorage.getItem('@PermissionRBAC:token');
    if(token) return true;
    else return false;
  }, []);

  const logOut = useCallback(() => {
    localStorage.removeItem('@PermissionRBAC: token');
  },[]);

  return(
    <AuthContext.Provider value={{ token, logIn, logOut, isLogged }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContextState {
  const context = useContext(AuthContext);

  return context;
}

export { useAuth, AuthProvider };