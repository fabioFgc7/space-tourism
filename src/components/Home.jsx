import React from "react";

export const Home = () => {
  return (
    <main className="box-border h-screen md:bg-[url('/public/assets/home/background-home-desktop.jpg')]  bg-[url('/public/assets/home/background-home-tablet.jpg')] relative">
      <h2 className='absolute bottom-auto md:top-40 md:w-auto  top-24 md:left-24 flex justify-center w-full md:justify-start'>
        SO, YOU WANT TO TRAVEL TO
      </h2>
      <section className='space-y-16 md:pt-56 pt-32 grid md:grid-cols-2 md:ml-20 grid-cols-1 '>
        <div className='space-y-10 text-center md:text-justify place-content-center md:place-content-start'>
          <div className='space-y-10 md:w-2/3 text-center md:text-justify'>
            <h1 className='text-8xl'>Space</h1>
            <p className='ml-auto mr-auto w-3/5 md:w-auto'>
              Lers face it: ft you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because well give you a truly out of
              this worid experience!
            </p>
          </div>
        </div>
        <div className='md:grid md:place-items-center ml-auto mr-auto z-40 '>
          <a
            className="bg-white w-32 h-32 md:w-52 md:h-52 text-slate-600 uppercase text-lg rounded-full flex items-center justify-center after:absolute after:content-[''] md:after:w-60 after:-z-10 md:after:bg-[#0b0d19] after:bg-[#0c164e] after:rounded-full md:after:h-60 after:h-36 after:w-36  
        after:duration-1000 after:ease-in-out after:opacity-0 hover:after:scale-150 hover:after:opacity-60 cursor-pointer font-bold select-none">
            Explore
          </a>
        </div>
      </section>
    </main>
  );
};
