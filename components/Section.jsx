const Section = ({ title, children }) => {
  const baseTitle = title.split(' ').slice(0, -1).join(' ');
  const formatedTitle = title.split(' ').pop();

  return (
    <section className="py-14">
      <div className="container">
        <header className="mb-6 md:mb-10">
          <h2 className="text-black-900 font-bold text-xl md:text-3xl text-center">
            {baseTitle} <span className="text-orange">{formatedTitle}</span>
          </h2>
        </header>
        {children}
      </div>
    </section>
  );
};

export default Section;
