import React from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Login = () => {

const navigate = useNavigate();

const handleSignUp = () => {
  // After validation or API call (if any)
  navigate("/create-profile");
};
 return (
  <div className="min-h-screen flex items-center justify-center p-2 bg-black">
    {/* Outer border wrapper */}
    <div className="w-full max-w-[1200px] border-[2px] border-[#8A7EA8] rounded-3xl overflow-hidden flex">

      {/* Left Section */}
      <div className="w-1/2 bg-[#0D0D0D] text-[#EDEDED] flex flex-col items-center  justify-center p-12">
        <img src={logo} alt="logo" className="h-60 mb-4 pb-4" />
        <h1
          style={{ fontFamily: 'Outfit' }}
          className="text-5xl font-bold text-center"
        >
          Find your grind squad.
        </h1>
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-[#0D0D0D] flex items-center justify-center p-8">
        <div className="border border-[#8A7EA8] p-10 rounded-2xl shadow-lg w-full max-w-lg">
          <InputField label="Email" type="email" />
          <InputField label="Password" type="password" />
          <Button text="Login" />
          <p className="text-gray-400 text-sm text-center mt-4">
            Don’t have an account?{' '}
            <span onClick={handleSignUp} className="text-white underline cursor-pointer">Sign up</span>
          </p>
        </div>
      </div>
    </div>
  </div>
);

}
export default Login;

