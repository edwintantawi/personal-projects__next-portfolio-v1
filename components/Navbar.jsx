import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';

const NAV_LINK = [
  { title: 'Home', url: '/' },
  { title: 'Resume', url: '/resume' },
  { title: 'Project', url: '/project' },
  { title: 'Blogs', url: '/blogs' },
  { title: 'About Me', url: '/aboutme' },
  { title: 'Contact Me', url: '/contactme' },
];

const Navbar = () => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const route = useRouter().route;

  const handleToggleMenuClick = (event) => {
    setIsActiveMenu((prev) => !prev);
    event.stopPropagation();
  };

  return (
    <nav className=" mx-auto p-4 lg:p-6 fixed w-full bg-white">
      <div className="flex justify-between container-sm sm:container">
        <Link href="/">
          <a className="flex">
            <Image src="/logo.svg" width="44px" height="30px" />
          </a>
        </Link>
        <ul
          className={`${
            !isActiveMenu && 'transform translate-x-[100vw]'
          } w-4/5 xs:w-2/3 sm:!w-3/6 md:!w-auto bg-white py-12 px-12 md:py-0 md:px-0 border md:border-none transition duration-500 flex flex-col md:flex-row fixed md:static top-16 bottom-0 right-0 md:space-x-10 md:translate-x-0 space-y-6 md:space-y-0`}>
          {NAV_LINK.map((link, index) => (
            <li key={index} className="flex items-center">
              <Link href={link.url}>
                <a className={`${route === link.url && 'link-active'}`}>
                  {link.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <a
          href="#"
          className="grid md:hidden w-8 h-8 place-items-center"
          onClick={handleToggleMenuClick}>
          <i
            className={`fas ${
              isActiveMenu ? 'fa-times' : 'fa-bars'
            } text-3xl text-black-900`}></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
