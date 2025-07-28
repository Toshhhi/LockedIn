import React from 'react';

const InputField = ({ label, type }) => {
  return (
    <div className="mb-4">
      <label className="block text-white mb-1">{label}</label>
      <input
        type={type}
        className="w-full p-2 rounded-lg bg-[#2b2b2e] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>
  );
};

export default InputField;