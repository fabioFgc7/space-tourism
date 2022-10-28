import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RoutePage } from "../pages/RoutePage";

import { HamburgerBotton } from "./HamburgerBotton";

export const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  let opneBotton = "./assets/shared/icon-hamburger.svg";
  let closedBotton = "./assets/shared/icon-close.svg";
  const [botton, setBotton] = useState(opneBotton);

  const handleOpne = (e) => {
    if (botton === opneBotton) {
      setBotton(closedBotton);
      setIsActive((current) => !current);
    }
    if (botton === closedBotton) {
      setBotton(opneBotton);

      setIsActive((current) => !current);
    }
  };

  return (
    <div className='relative'>
      <img
        className='absolute z-10 bottom-auto md:top-10 md:left-10 top-4 md:right-auto left-auto right-6 md:inline-block flex justify-center items-center animate-spin-slow '
        src='./assets/shared/logo.svg'
        alt='Logo'
      />
      <HamburgerBotton
        handleOpne={handleOpne}
        botton={botton}
      />
      <nav
        className={` bg-[#0d1a2d]  z-30 md:absolute md:left-auto md:right-4 md:bottom-auto md:top-8 px-5 md:bg-opacity-30 md:px-6 font-sans fixed bottom-0 top-0 right-0 left-0 translate-y-0  md:-translate-x-0  w-40 md:w-auto  ${
          isActive ? "-translate-x-0" : "-translate-x-full"
        } pt-12 md:pt-0 duration-500`}>
        <ul className='  md:flex md:space-x-4 grid grid-cols-1 gap-y-2 text-justify py-4 text-gray-300'>
          <li
            onClick={handleOpne}
            className='hover:bg-[#083D77] pl-2 w-full md:p-0  md:w-auto md:hover:border-b-2 md:pl-0 md:hover:bg-transparent md:hover:border-b-white'>
            <Link to='/'>
              <span className='text-white'>00</span> Home
            </Link>
          </li>
          <li
            onClick={handleOpne}
            className='hover:bg-[#083D77] pl-2 w-full md:pl-0 md:w-auto md:hover:border-b-2 md:hover:bg-transparent md:hover:border-b-white'>
            <Link to='destination'>
              <span className='text-white'>01</span> Destination
            </Link>
          </li>
          <li
            onClick={handleOpne}
            className='hover:bg-[#083D77] pl-2 w-full md:w-auto md:pl-0 md:hover:border-b-2 md:hover:bg-transparent md:hover:border-b-white'>
            <Link to='crew'>
              <span className='text-white'>02</span> Crew
            </Link>
          </li>
          <li
            onClick={handleOpne}
            className='hover:bg-[#083D77] pl-2 w-full md:pl-0 md:w-auto md:hover:border-b-2 md:hover:bg-transparent md:hover:border-b-white'>
            <Link to='tecnology'>
              <span className='text-white'>03</span> Tecnology
            </Link>
          </li>
        </ul>
      </nav>

      <RoutePage />
    </div>
  );
};
