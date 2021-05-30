import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import dataSite from '../data/data-site';

const Navbar = () => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const route = useRouter().route;

  const handleToggleMenuClick = (event) => {
    event.preventDefault();
    setIsActiveMenu((prev) => !prev);
    event.stopPropagation();
  };

  return (
    <nav className=" mx-auto p-3 lg:p-6 sticky top-0 z-50 w-full bg-white">
      <div className="flex justify-center md:justify-between container-sm sm:container">
        <Link href="/">
          <a className="flex">
            <Image src="/logo.svg" width="44px" height="30px" alt="" />
          </a>
        </Link>
        <ul
          className={`${
            isActiveMenu ? 'translate-y-0' : 'translate-y-[100vh]'
          } transform w-full md:w-auto bg-gray-50 bg-opacity-90 backdrop-filter backdrop-blur-sm p-3 py-8 md:p-0 border-t-2 border-gray-100 md:border-none transition duration-500 flex flex-col md:flex-row fixed md:static bottom-0 right-0 left-0 md:space-x-10 md:translate-y-0 space-y-5 md:space-y-0`}>
          {dataSite.naviagtion.map((link, index) => (
            <li key={index} className="flex items-center justify-center">
              <Link href={link.url}>
                <a className={`${route === link.url && 'link-active'}`}>
                  {link.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <a
        href="#"
        className={`grid md:hidden place-items-center fixed transform transition duration-500 bottom-4 right-1/2 translate-x-1/2 bg-white rounded-full shadow-lg border-2 border-orange w-14 h-14 ${
          isActiveMenu ? '-translate-y-64' : 'translate-y-0'
        }`}
        onClick={handleToggleMenuClick}>
        <i
          className={`fas ${
            isActiveMenu ? 'fa-window-close' : 'fa-map'
          } text-2xl text-orange`}></i>
      </a>
    </nav>
  );
};

export default Navbar;
