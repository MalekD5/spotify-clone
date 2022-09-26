import React from 'react';

const Error = ({ info }) => (
  <div className="w-full flex justify-center item-center">
    <h1 className="font-bold text-2xl text-white mt-2">
      Something went wrong. Please try again.
    </h1>
    {info && <p className="text-gray-300 text-xl">{info}</p>}
  </div>
);

export default Error;
