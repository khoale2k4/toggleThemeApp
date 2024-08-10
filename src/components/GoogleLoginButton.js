import React, { useContext } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { signIn } from "next-auth/react";
import { UserContext } from '../Context/UserContext';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSuccess = (response) => {
    const profile = jwtDecode(response.credential); 

    localStorage.setItem('accessToken', JSON.stringify(profile));
    console.log("To local",localStorage.getItem('accessToken'));
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
    <div>
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={handleError}
    />

<button
              className="mr-3 scale-125 sm:scale-100"
              onClick={() => {
                signIn("google");
              }}
            >
              <img
                src="https://img.shields.io/badge/Google-lightgray?style=for-the-badge&logo=google&logoColor=white"
                alt="Google Sign-in"
                className="rounded-xl"
              />
            </button>
    </div>
    
  );
};

export default SignIn;
