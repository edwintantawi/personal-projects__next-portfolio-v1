const dataSite = {
  naviagtion: [
    { title: 'Home', url: '/', icon: 'fas fa-home' },
    { title: 'Resume', url: '/resume', icon: 'fas fa-file-alt' },
    { title: 'Project', url: '/project', icon: 'fas fa-tools' },
    {
      title: 'About',
      url: '/aboutme',
      icon: 'fas fa-user-circle',
    },
    { title: 'Contact', url: '/contactme', icon: 'fas fa-address-card' },
  ],
  hero: {
    name: 'Edwin Tantawi',
    title: 'Frontend Web Developer',
    short_bio:
      'I am a student from Indonesia, who focuses on web development, especially frontend web development.',
  },
  what_can_i_do: [
    {
      icon: '/uiuxdesign.svg',
      title: 'Ui Ux design',
      description:
        'Develop a user interface and user experience that is good, beautiful, and comfortable to use by the user and following the latest trends',
    },
    {
      icon: '/websitedev.svg',
      title: 'Website Development',
      description:
        'Develop a website with an attractive and interactive appearance with good performance and using the latest technology',
    },
    {
      icon: '/webappsdev.svg',
      title: 'WebApps Development ',
      description:
        'Developing web-based applications with usable features, good performance and the latest technology that delivers quality web applications',
    },
  ],
  skills_technology: [
    {
      icon: '/techstack/html5.svg',
      title: 'HTML 5',
    },
    {
      icon: '/techstack/css3.svg',
      title: 'CSS 3',
    },
    {
      icon: '/techstack/javascript.svg',
      title: 'Javascript',
    },
    {
      icon: '/techstack/webpack.svg',
      title: 'webpack 5',
    },
    {
      icon: '/techstack/reactjs.svg',
      title: 'React JS',
    },
    {
      icon: '/techstack/firebase.svg',
      title: 'Firebase',
    },
    {
      icon: '/techstack/git.svg',
      title: 'GIT',
    },
    {
      icon: '/techstack/github.svg',
      title: 'Github',
    },
  ],
  projects: [
    {
      top: true,
      image:
        'https://firebasestorage.googleapis.com/v0/b/edwintantawi-25f09.appspot.com/o/projects%2Fcookingbox.png?alt=media',
      title: 'CookingBox',
      stack: 'HTML, CSS, PWA',
      link: 'https://cookingboxs.netlify.app',
    },
    {
      top: true,
      image:
        'https://firebasestorage.googleapis.com/v0/b/edwintantawi-25f09.appspot.com/o/projects%2Fnetflix-clone.png?alt=media',
      title: 'Netflix Clone',
      stack: 'React JS, CSS, TMDB API',
      link: 'https://clone-netflix-web.netlify.app/',
    },
    {
      top: true,
      image:
        'https://firebasestorage.googleapis.com/v0/b/edwintantawi-25f09.appspot.com/o/projects%2Fwhatsapp-clone.png?alt=media',
      title: 'Whatsapp Clone',
      stack: 'React JS, CSS, Firebase',
      link: 'https://clone-whatsapp-web.netlify.app/',
    },
    {
      top: false,
      image:
        'https://firebasestorage.googleapis.com/v0/b/edwintantawi-25f09.appspot.com/o/projects%2Fweneeddev.png?alt=media',
      title: 'WeNeedDev',
      stack: 'HTML, CSS, Bootstrap 5',
      link: 'https://weneeddev.netlify.app/',
    },
    {
      top: false,
      image:
        'https://firebasestorage.googleapis.com/v0/b/edwintantawi-25f09.appspot.com/o/projects%2Fpinterest-clone.png?alt=media',
      title: 'Pinterest Clone',
      stack: 'React JS, CSS, Unsplash API',
      link: 'https://clone-pinterest-web.netlify.app/',
    },
    {
      top: false,
      image:
        'https://firebasestorage.googleapis.com/v0/b/edwintantawi-25f09.appspot.com/o/projects%2Fgoogle-clone.png?alt=media',
      title: 'Google Clone',
      stack: 'React JS, CSS, Google API',
      link: 'https://clone-google-web.netlify.app/',
    },
  ],
  courses: [
    {
      timestamp: '11 May 2021 - Present',
      title: 'IDCamp 2021',
      subtitle: 'Back-end Learning Path',
      descriptions: '',
      list: [
        {
          title: 'Belajar Dasar Pemrograman JavaScript',
          level: 'Beginner',
          link: 'https://www.dicoding.com/certificates/RVZK4QLMMPD5',
        },
        {
          title: 'Belajar Membuat Aplikasi Back-End untuk Pemula',
          level: 'Beginner',
          link: 'https://www.dicoding.com/certificates/MEPJ504OLP3V',
        },
      ],
    },
    {
      timestamp: '28 Apr 2021 - 10 May 2021',
      title: 'Baparekraf Development Day 2021',
      subtitle: 'Front-End Learning Path',
      descriptions: '',
      list: [
        {
          title: 'Menjadi Front-End Web Developer Expert',
          level: 'Expert',
          link: 'https://www.dicoding.com/certificates/81P21DGOJZOY',
        },
      ],
    },
    {
      timestamp: '20 Jul 2020 - 9 Aug 2020',
      title: 'Baparekraf Development Day 2020',
      subtitle: 'Front-End Learning Path',
      descriptions: '',
      list: [
        {
          title: 'Belajar Dasar Pemrograman Web',
          level: 'Beginner',
          link: 'https://www.dicoding.com/certificates/1RXY46WJ9PVM',
        },
        {
          title: 'Belajar Fundamental Front-End Web Development',
          level: 'Intermediate',
          link: 'https://www.dicoding.com/certificates/JMZVM9OJ3ZN9',
        },
        {
          title: 'Membangun Progressive Web Apps',
          level: 'Expert',
          link: 'https://www.dicoding.com/certificates/JMZVM9OJNZN9',
        },
      ],
    },
  ],
  education: [
    {
      timestamp: '2020 - Present',
      title: 'STMIK Mikroskil',
      subtitle: 'College',
      descriptions:
        'Studying at STMIK Mikroskil, Indonesia by majoring in Informatics Engineering',
      list: [],
    },
    {
      timestamp: '2017 - 2020',
      title: 'SMK Methodist Tamora',
      subtitle: 'Vocational High School',
      descriptions:
        'Demanding knowledge at the Methodist Junior high school Vocational School, Indonesia. By' +
        ' majoring in Computer Network Engineering',
      list: [],
    },
    {
      timestamp: '2014 - 2017',
      title: 'SMP Mehodist Tamora',
      subtitle: 'Junior high school',
      descriptions:
        'Demanding knowledge at the Methodist Tamora Junior high school, Indonesia.' +
        ' Network Engineering',
      list: [],
    },
    {
      timestamp: '2008 - 2014',
      title: 'SD Mehodist Tamora',
      subtitle: 'Elementary school',
      descriptions:
        'Demanding knowledge at the Methodist Tamora Elementary school, Indonesia.',
      list: [],
    },
  ],
};

export default dataSite;
// timestamp="20-Jul-2020 - 9-Aug-2020"
//           title="Baparekraf Development Day 2020"
//           subTitle="Front-End Learning Path [ Beginer, intermediate ]"
//           list={[
//             {
//               title: 'title',
//               level: 'level',
//             },
//             {
//               title: 'title',
//               level: 'level',
//             },
//           ]}
//           descriptions="Take a scholarship to study Programming at Dicoding Academy from Baparekraf Development Day by Kemenparekraf"
