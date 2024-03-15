// eslint-disable-next-line no-unused-vars
import React from 'react';
import imageHome from '../assets/homeimage1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { faStore } from '@fortawesome/free-solid-svg-icons';
import {Toaster} from 'sonner';
const Home = () => {
  return (
    <div className="h-screen max-h-[calc(100vh-64px)] overflow-y-hidden bg-amber-100 text-center grid grid-cols-2 gap-4 home">
      <div className="flex flex-col items-center justify-center textHome">
        <p className='font-black text-4xl leading-loose text-blue-900'>Welcome to our pet shop!</p>
        <span className='font-medium text-2xl leading-loose text-blue-900'>One More Friend Thousand More Fun!</span>
        <p className='text-xl leading-loose mb-4 text-blue-900'>We provide a variety of services including adoption, donation, and community events.</p>
        <div className="flex space-x-4 ">
          <button className="bg-blue-900 whitespace-nowrap px-4 py-2 w-40 text-white font-black rounded-full">
            <div className="flex items-center space-x-2">
              <span className='explore text-white'>Explore Now</span>
              <FontAwesomeIcon icon={faCirclePlay} />
            </div>
          </button>
          <button className="text-blue-900 px-4 py-2 w-36 whitespace-nowrap font-black rounded-full border-2 border-blue-900 shop">
            <div className="flex items-center space-x-2">
              <span>Shop Now</span>
              <FontAwesomeIcon icon={faStore} />
            </div>
          </button>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center image-container relative' style={{zIndex:"1"}}>
        <img src={imageHome} alt="Pet Shop" className="home-image w-80 absolute z-30"/>
        <div className='flex justify-center items-center r1 shrink-0 z-20 absolute'></div>
        <div className='flex justify-center items-center r2 shrink-0 z-10 absolute '></div>
      </div>
      <Toaster richColors />
    </div>
  );
};

export default Home;