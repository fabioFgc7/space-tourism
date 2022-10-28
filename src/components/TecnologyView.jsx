import React, { useState } from "react";
import { technology } from "../data/data.json";
export const TecnologyView = () => {
  const [datos, setDatos] = useState(technology);
  const [valor, setValor] = useState(0);

  const { description, name, images } = datos[valor];
  return (
    <>
      <h2 className='absolute bottom-auto md:top-40 md:w-auto  top-24 md:left-[196px] flex justify-center w-full md:justify-start'>
        03 SPACE LAUNCH 101
      </h2>
      <section className='md:pt-56 pt-44 md:p-10 grid md:grid-cols-2 md:gap-x-10 md:place-content-center md:place-items-center grid-cols-1  '>
        <div className='w-full grid md:flex md:space-x-32 grid-cols-1 space-y-5 '>
          <div className=' md:grid md:grid-cols-1  text-center space-x-4 md:text-justify space-y-0 md:space-x-0 md:h-[40vh] '>
            <button
              className='rounded-full w-12 h-12 border-2 border-gray-500 focus:bg-white focus:text-slate-900'
              onClick={() => setValor(0)}>
              1
            </button>
            <button
              className='rounded-full w-12 h-12 border-2 border-gray-500 focus:bg-white focus:text-slate-900'
              onClick={() => setValor(1)}>
              2
            </button>
            <button
              className='rounded-full w-12 h-12 border-2 border-gray-500 focus:bg-white focus:text-slate-900'
              onClick={() => setValor(2)}>
              3
            </button>
          </div>
          <div className='w-full space-y-5 text-center md:text-justify'>
            <h4 className='text-sm'>THE TECNOLOGY...</h4>
            <h2 className='text-4xl'>{name}</h2>
            <p className='w-4/5 md:w-full mr-auto ml-auto md:ml-0 md:mr-0'>
              {description}
            </p>
          </div>
        </div>

        <div className='w-auto order-first md:order-last flex justify-center mb-5 md:justify-end'>
          <img
            className='md:w-4/6 md:h-2/4  w-[40vh] h-[40vh]'
            src={images.portrait}
            alt=''
          />
        </div>
      </section>
    </>
  );
};
