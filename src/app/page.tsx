

import React from 'react';
import Navbar from '@/app/components/Navbar'; 
import Link from 'next/link';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-green-950 to-slate-400 min-h-screen flex flex-col">
        <div className="flex flex-col  animate-move-to-front justify-center items-center p-8 space-y-8 flex-grow">
          <div className="  bg-gradient-to-r from-green-950 to-slate-400 p-8 rounded-lg shadow-xl max-w-lg w-full text-center transform transition-all hover:scale-105 hover:shadow-2xl">
            <h1 className="text-3xl font-bold text-black mb-4  animate-pulse-smooth">
              Welcome to Your Data Gateway!
            </h1>
            <p className="text-black mb-6 font-semibold text-xl  animate-slide-up">
              How do you prefer fetching your data?
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/client" passHref>
                <button className="  bg-gradient-to-r from-green-950 to-slate-400 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none transition-all ease-in-out duration-300">
                  Client Side
                </button>
              </Link>
              <Link href="/server" passHref>
                <button className="bg-gradient-to-r from-green-950 to-slate-400 text-white px-6 py-2 rounded-md hover:bg-green-600 focus:outline-none transition-all ease-in-out duration-300">
                  Server Side
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
