import React from 'react';

import SignIn from './pages/SingIn';
// import SignUp from './pages/SingUp';
import GlobalStyle from './styles/global';

import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <GlobalStyle />
  </>
);

export default App;
