import Head from 'next/head';

const PageHead = ({ title = 'Edwin Tantawi', descriptions, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={descriptions} />
      <meta
        name="keywords"
        content={`Edwin Tantawi, Edwin, Tantawi, Frontend developer, web developer, wintantawi, edwintantawi, portfolio, ${keywords}`}
      />
    </Head>
  );
};

export default PageHead;
