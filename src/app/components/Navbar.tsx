import React from "react";

const Navbar = () => (
    <nav className="bg-gradient-to-r from-green-900 to-gray-950 p-4 flex justify-between items-center text-white">
      <h1 className="text-xl font-bold">DataFatch</h1>
      <div className="space-x-4">
        <a href="/" className="hover:underline">Home</a>
        <a href="/client" className="hover:underline">Client-Side</a>
        <a href="/server" className="hover:underline">Server-Side</a>
      </div>
    </nav>
  );
  
  export default Navbar;
  