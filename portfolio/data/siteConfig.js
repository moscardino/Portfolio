module.exports = {
  siteTitle: "Hi! I'm Francesco!",
  siteDescription: `My portfolio`,
  keyWords: ['Murex', 'Javascript', 'curriculum'],
  authorName: 'Francesco Vittori',
  twitterUsername: '',
  githubUsername: 'moscardino',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: [
    {
      whatIam: `I'm a physicist.`,
      details: `Too social to be a nerd, too curious to be something else.`,
      image: '/images/physicist.svg', 
    },
    {
      whatIam: `I'm an entrepreneur.`,
      details: `My entire life is based on the concept that building the future is a strange mixture of breaking through decisions and will power, with a sprinkle of luck.`,
      image: '/images/businessMan.svg',
    },
    {
      whatIam: `I'm a project manager.`,
      details: `Everything is a project. Even preparing your breakfast. And every project can be done with a straight through approach or with an innovative mindset. I prefer the latter, but I don't disregard the former.`,
      image: '/images/entrepreneur.svg',
    },
    {
      whatIam: `I'm a husband.`,
      details: `I’ve found the girl.`,
      image: '/images/husband.svg',
    },
    {
      whatIam: `I'm a father.`,
      details: `That girl gave me a wonderful present.`,
      image: '/images/father.svg',
    },
    {
      whatIam: `I'm a software engineer, a technical analyst, a financial analyst, a business analyst, an electrical engineer, a mechanical engineer, a researcher.`,
      details: `Well I’m a little bit of all these people. I’ve got some professional experience in each one of these fields.`,
      image: '/images/handyman.svg',
    },
  ],
  skills: [
    {
      name: 'HTML',
      level: 70,
    },
    {
      name: 'CSS',
      level: 60,
    },
    {
      name: 'Javascript',
      level: 50,
    },
    {
      name: 'NodeJs',
      level: 40,
    },
    {
      name: 'React',
      level: 60,
    },
    {
      name: 'Git',
      level: 70,
    },
  ],
  jobs: [
    {
      company: 'Lendico',
      begin: {
        month: 'apr',
        year: '2018',
      },
      duration: null,
      occupation: 'Frontend developer',
      description:
        'I integrate the Frontend team responsible for developing and maintaining the online lending platform.',
    },
    {
      company: 'Anapro',
      begin: {
        month: 'dec',
        year: '2016',
      },
      duration: '1 yr e 5 mos',
      occupation: 'Fullstack developer',
      description:
        'Development and maintenance, corrective and preventive, of web applications for the real estate market.',
    },
    {
      company: 'Anapro',
      begin: {
        month: 'set',
        year: '2012',
      },
      duration: '4 yrs e 3 mos',
      occupation: 'Support Technician',
      description:
        'Responsible for the implementation and parameterization of the system, training and customer support. Acting also in person in real estate launches guaranteeing the success and good use of the tool.',
    },
    /* ... */
  ],
  social: {
    twitter: 'https://twitter.com/_franciscodf',
    linkedin: 'https://www.linkedin.com/in/santos-francisco',
    github: 'https://github.com/santosfrancisco',
    email: 'yoshi.df@gmail.com',
  },
  siteUrl: 'https://santosfrancisco.github.io/gatsbystarter-cv',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Francesco Vittori',
      url: '/',
    },
  ],
}
