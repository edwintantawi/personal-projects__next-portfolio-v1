const Timeline = ({ timestamp, title, subtitle, list, descriptions }) => {
  return (
    <div className="flex flex-col px-6 py-6 border-l-2">
      <div className="relative mb-3">
        <div className="absolute w-3 h-3 bg-orange rounded-full left-[-31px] bottom-1/2 transform translate-y-1/2" />
        <span className="py-1 px-5 text-xs border border-orange rounded-full">
          {timestamp}
        </span>
      </div>
      <div className="grid grid-cols-1 gap-y-2 gap-x-0 lg:gap-x-10 lg:grid-cols-4">
        <div>
          <h3 className="text-base font-semibold">{title}</h3>
          <span className="block text-xs md:text-sm text-orange">
            {subtitle}
          </span>
        </div>
        <div className="col-span-2">
          {descriptions && (
            <p className="text-xs lg:text-base text-gray-500 mb-3">
              {descriptions}
            </p>
          )}

          <ul className="list-disc text-xs sm:text-sm">
            {list.map((item, index) => (
              <li key={index} className="mb-2">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <span className="text-gray-500 hover:text-black-900 transition duration-300">
                    {item.title} <i className="fas fa-link" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
