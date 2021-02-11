import React, { useCallback, useState } from 'react';

import { useAuth }  from '../../context/AuthContext';

import { Container } from './styles';

const LogIn: React.FC = () => {
  const { logIn } = useAuth();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    await logIn({email, password});
  },[email, password, logIn]);

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" >Usuário</label>
          <input 
            name="email" 
            type="text" 
            placeholder="johndoe@mail.com"
            onChange={(event) => setEmail(event.target.value)}  
          />
        </div>

        <div>
          <label htmlFor="senha" >Senha</label>
          <input 
            name="senha" 
            type="password" 
            placeholder="********"
            onChange={(event) => setPassword(event.target.value)} 
          />
        </div>

        <div>
          <button>Enviar</button>
        </div>
        
      </form>
    </Container>
    
  );
};

export default LogIn;