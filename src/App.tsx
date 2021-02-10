import React from 'react';
import { AuthProvider } from './context/AuthContext';

import LogIn from './pages/LogIn';

const App: React.FC = () => {
  return(
    <AuthProvider>
      <LogIn />
    </AuthProvider>
  );
};

export default App;
