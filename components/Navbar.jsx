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
    <nav className=" mx-auto p-4 lg:p-6 sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="flex justify-between container-sm sm:container">
        <Link href="/">
          <a className="flex">
            <Image src="/logo.svg" width="44px" height="30px" alt="" />
          </a>
        </Link>
        {/* <a
          href="#"
          className={`grid md:hidden place-items-center transform transition duration-500 w-10 h-10`}
          onClick={handleToggleMenuClick}>
          <i
            className={`fas ${
              isActiveMenu ? 'fa-window-close' : 'fa-map'
            } text-3xl text-orange`}></i>
        </a> */}
        <ul
          className={`
          ${isActiveMenu ? '' : 'translate-y-[100vh]'}
          text-[10px] md:text-sm
          transform w-16 md:w-auto bg-white md:bg-transparent px-3 py-8 md:p-0 border-2 border-orange
          md:border-none transition duration-500 flex flex-col md:flex-row justify-between fixed md:static bottom-24 right-5 space-y-4 md:space-y-0 md:space-x-12 md:translate-y-0 rounded-xl shadow-lg md:shadow-none`}
        >
          {dataSite.naviagtion.map((link, index) => (
            <li key={index} className="flex items-center justify-center">
              <Link href={link.url}>
                <a
                  className={`${
                    route === link.url
                      ? 'font-bold text-black-900'
                      : 'text-gray-500'
                  } flex flex-col md:flex-row w-7 md:w-auto items-center tracking-wide`}
                >
                  <i
                    className={`${link.icon} text-xl md:text-lg md:mr-2 ${
                      route === link.url ? 'text-orange' : 'text-gray-500'
                    } `}
                  />
                  <span className=" text-center">{link.title}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
        {/* <ul
          className={`${
            isActiveMenu ? 'translate-y-0' : 'translate-y-[100vh]'
          } transform w-full md:w-auto bg-gray-50 bg-opacity-90 backdrop-filter backdrop-blur-sm p-3 py-8 md:p-0 border-t-2 border-orange
          md:border-none transition duration-500 flex flex-col md:flex-row fixed md:static bottom-0 right-0 md:space-x-10 md:translate-y-0 space-y-5 md:space-y-0`}>
          {dataSite.naviagtion.map((link, index) => (
            <li key={index} className="flex items-center justify-center">
              <Link href={link.url}>
                <a className={`${route === link.url && 'link-active'}`}>
                  {link.title}
                </a>
              </Link>
            </li>
          ))}
        </ul> */}
      </div>
      <a
        href="#"
        aria-label="menu toggler"
        className={`grid md:hidden place-items-center fixed transform transition duration-500 bottom-6 right-6 bg-gray-50 bg-opacity-90 backdrop-filter backdrop-blur-sm rounded-full shadow-lg border-2 border-orange w-14 h-14 active:scale-75
        `}
        style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}
        onClick={handleToggleMenuClick}
      >
        <i
          className={`fas ${
            isActiveMenu ? 'fa-window-close' : 'fa-map'
          } text-2xl text-orange`}
        />
      </a>
    </nav>
  );
};

export default Navbar;
