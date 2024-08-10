'use client'; // This makes the component a Client Component

import React, { useContext, useState, useEffect } from 'react';
import { GoogleOAuthProvider } from "@react-oauth/google";
import SignIn from "../../components/GoogleLoginButton";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';

export default function LoginPage() {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (user) {
        // If the user is already logged in, redirect to the homepage
        navigate('/');
      }
    }, [user, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <GoogleOAuthProvider clientId="898075013516-p08s4gvcat26a6tlij53v1vla5o51o0j.apps.googleusercontent.com">
          <SignIn />
        </GoogleOAuthProvider>
        <div className="mt-6">
          <form>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white w-full py-2 px-4 rounded hover:bg-green-600 transition duration-200"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}