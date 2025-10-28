"use client";

import { useState } from "react";
import Image from "next/image";
import LoginForm from "./login/Login";
import SignUpForm from "./signup/SignupPage";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8 md:p-10 transition-all duration-300">
        {/* Logo + Title */}
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-3">
            <Image
              src="/icons/learnify-logo.svg"
              alt="Learnify Logo"
              width={28}
              height={28}
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            {isLogin ? "Welcome Back!" : "Create an Account"}
          </h2>
        </div>

        <div className="flex mb-6 border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => setIsLogin(true)}
            className={`w-1/2 py-2 text-sm font-medium ${
              isLogin
                ? "bg-blue-50 text-blue-600"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Log In
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`w-1/2 py-2 text-sm font-medium ${
              !isLogin
                ? "bg-blue-50 text-blue-600"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Sign Up
          </button>
        </div>

        <div className="transition-all duration-300">
          {isLogin ? <LoginForm /> : <SignUpForm />}
        </div>
      </div>
    </div>
  );
}
