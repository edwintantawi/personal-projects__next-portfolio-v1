const Header = ({ title, description }) => {
  return (
    <header className="flex items-center pt-8 md:pt-10">
      <div className="container px-3 mx-auto text-center md:text-left">
        <h1 className="font-bold text-black-900 text-4xl sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="max-w-[280px] md:max-w-sm text-gray-500 text-xs lg:text-base mt-4 mx-auto md:mx-0">
          {description}
        </p>
      </div>
    </header>
  );
};

export default Header;
