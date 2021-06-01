const Card = ({ title, link, stack, image }) => {
  return (
    <div
      key={title}
      className="border border-gray-300 rounded-lg pt-7 px-6 text-center overflow-hidden h-60 sm:h-96 md:h-64 group md:last:col-span-2 xl:last:col-span-1"
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="transition duration-300 hover:text-orange"
      >
        <h3
          className="font-semibold text-lg sm:text-xl text-black-500 cursor-pointer"
          title="Click me"
        >
          {title}
        </h3>
      </a>
      <p className="text-xs text-gray-500 mb-4">{stack}</p>
      <img
        src={image}
        alt={title}
        className="min-w-full shadow-card w-full transform translate-y-8 transition duration-500 group-hover:translate-y-2"
      />
    </div>
  );
};

export default Card;
