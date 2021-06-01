const Header = ({ title, description }) => {
  return (
    <header className="flex items-center mb-12 py-10 md:py-16 bg-gray-100">
      <div className="container px-3 md:text-left">
        <h1 className="font-bold text-black-900 text-4xl sm:text-6xl lg:text-7xl mb-1 md:mb-3">
          {title}
        </h1>
        <p className="max-w-[280px] md:max-w-lg text-gray-500 text-xs lg:text-base ">
          {description}
        </p>
      </div>
    </header>
  );
};

export default Header;
