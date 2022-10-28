import React, { useState } from "react";

export const HamburgerBotton = ({ handleOpne, botton}) => {
  
  return (
    <>
      <button
        onClick={handleOpne}
        className={`absolute bottom-auto left-5 right-auto top-4 z-50 md:hidden `}>
        <img
          src={botton}
          alt='Botton'
        />
      </button>
    </>
  );
};
