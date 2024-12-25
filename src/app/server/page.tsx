
import React from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

interface Book {
  id: number;
  name: string;
  author: string;
}

export default async function ServerPage() {
  const res = await fetch('https://simple-books-api.glitch.me/books/');
  const books: Book[] = await res.json();

  return (
    <>
      {/* Navbar  */}
      <Navbar />

    
      <div className="bg-gradient-to-r from-green-950 to-slate-400  min-h-screen py-12 px-6 lg:px-32">
       
        <h2 className="text-3xl font-extrabold text-center text-white mb-8  animate-pulse-smooth">Server-Side Data Fetching</h2>

        {/* 2 card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-center">
          {books.map((book) => (
            <div
              key={book.id}
              className="relative bg-gradient-to-r from-green-950 to-slate-400 h-[350px] p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
            >
              {/* Hover effect */}
              <div className="absolute inset-0 bg-cover bg-center opacity-0 hover:opacity-40 transition-all duration-300" ></div>

              {/* Card content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-white animate-slide-up">{book.name}</h3>
                <p className="text-gray-200 text-xl animate-slide-up">Author: {book.author}</p>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}
