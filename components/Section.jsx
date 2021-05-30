const Section = ({ title = '', near = false, className, children }) => {
  const baseTitle = title.split(' ').slice(0, -1).join(' ');
  const formatedTitle = title.split(' ').pop();

  return (
    <section className={`${className} py-14 md:py-20`}>
      <div className="container">
        <header className={`${near ? 'mb-2 md:mb-4' : 'mb-5 md:mb-10'}`}>
          <h2
            className={`text-black-900 font-bold
              text-xl md:text-3xl text-center`}>
            {baseTitle} <span className="text-orange">{formatedTitle}</span>
          </h2>
        </header>
        {children}
      </div>
    </section>
  );
};

export default Section;
