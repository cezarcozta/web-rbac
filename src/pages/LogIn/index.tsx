import React, { useCallback, useState, useContext } from 'react';

import { AuthContext }  from '../../context/AuthContext';

import { Container } from './styles';

const LogIn: React.FC = () => {
  const { logIn } = useContext(AuthContext);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    const response = await logIn({email, password});
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