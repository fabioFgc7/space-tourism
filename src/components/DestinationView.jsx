import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { destinations } from "../data/data.json";

export const DestinationView = () => {
  const [datos, setDatos] = useState(destinations);
  const [value, setValue] = useState(0);

  const { description, name, distance, travel, images } = datos[value];

  return (
    <>
      <h2 className='absolute bottom-auto md:top-40 left-10 top-32 md:left-32 '>
        01 PICK YOUR DESTINATION
      </h2>
      <section className='md:pt-56 pt-44 md:p-10 grid md:grid-cols-2 md:gap-x-10 md:place-content-center md:place-items-center grid-cols-1 '>
        <div className='flex justify-center'>
          <img
            className='md:w-80 w-60 animate-spin-planet select-none'
            src={images.png}
            alt='images'
          />
        </div>
        <div className='space-y-2 mr-auto ml-auto'>
          <div className='flex space-x-5 justify-center md:justify-start my-10 '>
            <button
              className='hover:border-b-2 border-b-2 border-b-transparent hover:border-b-white '
              onClick={() => setValue(0)}>
              MOON
            </button>
            <button
              className='hover:border-b-2 border-b-2 border-b-transparent hover:border-b-white '
              onClick={() => setValue(1)}>
              MARS
            </button>
            <button
              className='hover:border-b-2 border-b-2 border-b-transparent hover:border-b-white '
              onClick={() => setValue(2)}>
              EUROPA
            </button>
            <button
              className='hover:border-b-2 border-b-2 border-b-transparent hover:border-b-white '
              onClick={() => setValue(3)}>
              TITAN
            </button>
          </div>
          <div className='space-y-4 text-center md:text-justify md:pb-4'>
            <h2 className='text-5xl font-bold'>{name}</h2>
            <p className='w-3/4 md:w-4/5 mr-auto ml-auto md:mr-0 md:ml-0'>
              {description}
            </p>
          </div>
          <div className='underline h-[2px] w-3/4 bg-gray-400 ml-auto mr-auto md:mr-0 md:ml-0 '></div>
          <div className='py-5 md:flex md:space-x-8 grid grid-cols-1 text-center md:text-justify space-y-5 md:space-y-0 '>
            <article>
              <p className='text-sm '>AWG. DISTANCE</p>
              <h3 className='text-xl'>{distance}</h3>
            </article>
            <div className='underline h-[2px] w-3/4 bg-gray-400 ml-auto mr-auto md:hidden '></div>
            <article>
              <p className='text-sm '>TRAVEL MONHTS</p>
              <h3 className='text-xl'>{travel}</h3>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};
