
// "use client";

// import { useState, useEffect } from "react";
// import Navbar from "@/app/components/Navbar";
// import Footer from "@/app/components/Footer";

// interface Product {
//   id: number;
//   title: string;
//   image: string;
//   price: number;
// }

// export default function ClientPage() {
//   const [products, setProducts] = useState<Product[]>([]); // Typing the state

//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false)); // If fetch fails
//   }, []);


// // if (loading) {
// //     return (
// //       <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-950 to-slate-300">
// //         {/* Spinner using Tailwind CSS (With more style) */}
// //         <div className="w-20 h-20 border-8 border-t-8 border-x-gray-500 border-solid rounded-full animate-spin border-t-green-950"></div>
// //       </div>
// //     );
// //   }

//  if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-950 to-slate-300">
        
//         <div className="w-24 h-24 relative">
        
//           <div className="w-full h-full absolute rounded-full border-t-8 border-l-8 border-r-8 border-b-8 border-green-400 border-t-green-700 border-l-green-900  bg-gray-300 rotate spinner-pulse animate-spin"></div>
          
        
//           <div className="absolute w-16 h-16 rounded-full bg-gray-800 opacity-20 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
//         </div>
//       </div>
//     );
//   }


//   return (
//     <>
//       <Navbar />
//       <div className="p-6 bg-gradient-to-r from-green-950 to-slate-300">
//         <h2 className="text-4xl font-bold mb-4 text-white flex justify-center animate-pulse-smooth">
//           Client-Side Data Fetching
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white   p-4 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl w-full max-w-xs mx-auto"
//             >
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 className="h-40 w-full object-contain"
//               />
//               <h3 className="mt-2 font-semibold">{product.title}</h3>
//               <p className="text-gray-500">${product.price}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

export default function ClientPage() {
  const [products, setProducts] = useState<Product[]>([]); // Typing the state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false)); // If fetch fails
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-950 to-slate-300">
        <div className="w-24 h-24 relative">
          <div className="w-full h-full absolute rounded-full border-t-8 border-l-8 border-r-8 border-b-8 border-green-400 border-t-green-700 border-l-green-900 bg-gray-300 rotate spinner-pulse animate-spin"></div>
          <div className="absolute w-16 h-16 rounded-full bg-gray-800 opacity-20 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="p-6 bg-gradient-to-r from-green-950 to-slate-300">
        <h2 className="text-4xl font-bold mb-4 text-white flex justify-center animate-pulse-smooth">
          Client-Side Data Fetching
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl w-full max-w-xs mx-auto"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={200} // Adjust dimensions if needed
                height={200}
                className="h-40 w-full object-contain"
              />
              <h3 className="mt-2 font-semibold">{product.title}</h3>
              <p className="text-gray-500">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
