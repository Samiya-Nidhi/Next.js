import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          <Link className="navbar_link relative" href="#">
            HOME
          </Link>
          <Link className="navbar_link relative" href="./components/Skin_Care.tsx">
            Skin Care 
          </Link>
          <Link className="navbar_link relative" href="#">
            Makeup 
          </Link>
          <Link className="navbar_link relative" href="#">
            Hair Care
          </Link>
          <Link className="navbar_link relative" href="#">
            Offers
          </Link>
          <Link className="navbar_link relative" href="#">
            BLOG
          </Link>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
