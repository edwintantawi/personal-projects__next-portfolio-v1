const Section = ({ title = '', align = 'center', className, children }) => {
  const baseTitle = title.split(' ').slice(0, -1).join(' ');
  const formattedTitle = title.split(' ').pop();

  return (
    <section className={`${className} py-14 md:py-20`}>
      <div className="container">
        <header className={`mb-5 md:mb-10`}>
          <h2
            className={`text-black-900 font-bold
              text-xl md:text-3xl ${
                align === 'left' ? 'text-left' : 'text-center'
              }`}
          >
            {baseTitle} <span className="text-orange">{formattedTitle}</span>
          </h2>
        </header>
        {children}
      </div>
    </section>
  );
};

export default Section;
