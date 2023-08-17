import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Home Link */}
        <Link href="/">
          <div className="text-white cursor-pointer">Home</div>
        </Link>

        {/* Experiences Link */}
        <Link href="/experiences">
          <div className="text-white cursor-pointer">Experiences</div>
        </Link>

        {/* Contact Link */}
        <Link href="/contact">
          <div className="text-white cursor-pointer">Contact</div>
        </Link>
        
         {/* API Link */}
         <Link href="/countryapi">
          <div className="text-white cursor-pointer">API</div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
