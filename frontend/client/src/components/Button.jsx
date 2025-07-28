import React from 'react';

const Button = ({ text }) => {
  return (
    <button className="w-full bg-[#8A7EA8] hover:bg-[#7c7199] focus-visible:ring-2 focus-visible:ring-[#8A7EA8] text-white py-2 px-4 rounded-lg font-semibold transition">

      {text} 
    </button>
  );
};

export default Button;
