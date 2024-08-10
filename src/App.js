import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import Router
import Header from './components/header';
import HeroSection from './components/heroSection';
import './i18n'; // Import tệp i18n
import { UserContext, UserProvider } from './Context/UserContext';
import LoginPage from './auth/login/page';
import Home from './(home)/page';
import PrivateRoute from './components/privateRoute';
import jwtDecode from 'jwt-decode'; // Import đúng cách

const App = () => {
  const { setUser } = useContext(UserContext);

  const getToken = async () => {
    const profile = JSON.parse(localStorage.getItem('accessToken'));
    if(profile){
      setUser({
        name: profile.name,
        email: profile.email,
        imageUrl: profile.picture
      });
    }
  }

  useEffect(() => {
    const checkToken = async () => {
      await getToken();
    };

    checkToken();
  }, []);

  return (
      <Router>  {/* Wrap the components in Router */}
        <Routes>
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
          {/* Các route khác */}
        </Routes>
      </Router>
  );
};

export default App;
