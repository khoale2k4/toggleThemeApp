import React, { useContext } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { UserContext } from '../Context/UserContext';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSuccess = (response) => {
    const profile = jwtDecode(response.credential); 
    console.log(profile);
    setUser({
      name: profile.name,
      email: profile.email,
      imageUrl: profile.picture
    });
    navigate('/');
  };

  const handleError = () => {
    console.log('Login Failed');
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={handleError}
    />
  );
};

export default SignIn;
