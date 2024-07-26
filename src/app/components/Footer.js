import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col w-full items-center text-center pb-6">
      <div className="flex items-center w-full justify-center">
        <div className="border-t-2 border-black flex-grow mr-6 sm:hidden"></div>
        <p className="text-sm mr-6">
          Designed and Coded by Michelle Chen © 2024
        </p>
      </div>
    </div>
  );
};

export default Footer;
