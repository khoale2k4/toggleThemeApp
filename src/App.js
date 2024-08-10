import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import Router
import Header from './components/header';
import HeroSection from './components/heroSection';
import './i18n'; // Import tệp i18n
import { UserProvider } from './Context/UserContext';
import LoginPage from './auth/login/page';
import Home from './(home)/page';
import PrivateRoute from './components/privateRoute';

const App = () => {
  return (
    <UserProvider>
      <Router>  {/* Wrap the components in Router */}
      <Routes>
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        {/* Các route khác */}
      </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
