import React, { useState } from "react";
import { crew } from "../data/data.json";

const CrewView = () => {
  const [datos, setDatos] = useState(crew);
  const [value, setValue] = useState(0);

  const { name, images, role, bio } = datos[value];
  return (
    <>
      <h2 className='absolute bottom-auto md:top-40  top-20 md:left-10 flex justify-center md:justify-start w-full md:w-auto'>
        02 MEET YOUR CREW
      </h2>
      <section className=' w-full pt-32 md:pt-52 placeholder-stone-400 p-10 grid md:grid-cols-2 md:gap-x-20 md:place-content-center space-x-10 md:place-items-center grid-cols-1 md:h-[100vh]'>
        <div className='grid w-full space-y-10  '>
          <div className='box-border space-y-3 text-center mt-5 md:text-justify '>
            <p className='text-xl '>{role}</p>
            <h2 className='text-3xl font-bold'>{name}</h2>
            <p>{bio}</p>
          </div>
          <div className='box-border space-x-5 order-first md:order-last text-center md:text-justify'>
            <input
              onClick={() => setValue(0)}
              type='radio'
              name='uno' defaultChecked
            />
            <input
              onClick={() => setValue(1)}
              type='radio'
              name='uno'
            />
            <input
              onClick={() => setValue(2)}
              type='radio'
              name='uno'
            />
            <input
              onClick={() => setValue(3)}
              type='radio'
              name='uno' 
            />
          </div>
        </div>
        <div className='md:order-last order-first flex justify-center md:justify-start '>
          <img
            className='md:w-3/4 w-[200px] h-[40vh] md:h-[70vh]'
            src={images.png}
            alt=''
          />
        </div>
      </section>
    </>
  );
};

export default CrewView;
