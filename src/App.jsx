import { useState } from 'react';
import LoginScreen from './screens/loginScreen';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    console.log('User logged in:', userData);
  };

  return (
    <div className="app-container">
      {user && (
        <div style={{ position: 'fixed', top: '16px', right: '16px', zIndex: 10000, background: 'rgba(10, 22, 41, 0.6)', backdropFilter: 'blur(10px)', padding: '8px 16px', borderRadius: '99px', color: '#38bdf8', fontSize: '13px', border: '1px solid rgba(56, 189, 248, 0.2)', fontWeight: '500', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          Session: {user.username} ({user.profession})
        </div>
      )}
      <LoginScreen onLoginSuccess={handleLoginSuccess} />
    </div>
  );
}

export default App;
