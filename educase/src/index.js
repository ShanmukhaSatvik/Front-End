import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingScreen from './LandingScreen';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import Profile from './Profile';  
const root = ReactDOM.createRoot(document.getElementById('root'));
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

