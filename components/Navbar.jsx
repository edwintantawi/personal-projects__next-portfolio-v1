import Link from 'next/link';
import Image from 'next/image';
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
  const route = useRouter().route;

  return (
    <nav className=" mx-auto p-5 fixed w-full bg-white">
      <div className="flex justify-between container-sm sm:container">
        <Link href="/">
          <a className="flex">
            <Image src="/logo.svg" width="44px" height="30px" />
          </a>
        </Link>
        <ul className="hidden space-x-10 md:flex">
          {NAV_LINK.map((link, index) => (
            <li
              key={index}
              className={`flex items-center ${
                route === link.url && 'link-active'
              }`}>
              <Link href={link.url}>
                <a>{link.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
