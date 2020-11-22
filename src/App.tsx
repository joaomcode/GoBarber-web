import React from 'react';

import SignIn from './pages/SingIn';
// import SignUp from './pages/SingUp';
import GlobalStyle from './styles/global';

import AuthContext from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'João' }}>
      <SignIn />
    </AuthContext.Provider>

    <GlobalStyle />
  </>
);

export default App;
