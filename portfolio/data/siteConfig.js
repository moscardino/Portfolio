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
      image: '/images/physicist.jpg',
    },
    {
      whatIam: `I'm an entrepreneur.`,
      details: `My entire life is based on the concept that building the future is a strange mixture of breaking through decisions and will power, with a sprinkle of luck.`,
      image: '/images/businessMan.jpg',
    },
    {
      whatIam: `I'm a project manager.`,
      details: `Everything is a project. Even preparing your breakfast. And every project can be done with a straight through approach or with an innovative mindset. I prefer the latter, but I don't disregard the former.`,
      image: '/images/projectmanager.svg',
    },
    {
      whatIam: `I'm a husband.`,
      details: `I’ve found the girl.`,
      image: '/images/husband.jpg',
    },
    {
      whatIam: `I'm a father.`,
      details: `That girl gave me a wonderful present.`,
      image: '/images/father.jpg',
    },
    {
      whatIam: `I'm a software engineer, a technical analyst, a financial analyst, a business analyst, an electrical engineer, a mechanical engineer, a researcher.`,
      details: `Well I’m a little bit of all these people. I’ve got some professional experience in each one of these fields.`,
      image: '/images/handyman.png',
    },
    {
      whatIam: `I'm a little girl.`,
      details: `Yes, I have some little girl's attitudes, just as everybody, but I'm really pride of them. I cry when I watch a romantic movie. I'm excited when I see a baby. I love to be emotive and emphatic.`,
      image: '/images/littlegirl.jpg',
    },
    {
      whatIam: `I am a reader.`,
      details: `I love books and enjoy reading whenever I can and almost wherever (thanks, Kindle!)`,
      image: '/images/reader.svg',
    },
    {
      whatIam: `I’m a gambler.`,
      details: `I don’t like casinos and betting money, they’re not rewarding enough. I love betting ideas.`,
      image: '/images/gambler.png',
    },
    {
      whatIam: `I’m a friend.`,
      details: `That kind of friend you can count on when you need him, but also that kind who can turn a boring night in an exiting journey.`,
      image: '/images/friend.png',
    },
    {
      whatIam: `I’m a startupper.`,
      details: `What a ugly word. Let’s say I love to start ventures and I love to be innovative. Innovation is something new, something real, something that run away straight to success.`,
      image: '/images/startupper.jpg',
    },
    {
      whatIam: `I’m a night-dreamer.`,
      details: `During the day I work to make my dreams real. Step by step.`,
      image: '/images/dreamer.jpg',
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
      company: 'Murex',
      begin: {
        month: 'nov',
        year: '2016',
      },
      duration: null,
      occupation: 'Senior Business Consultant',
      description: `Stream leader agile and SME (scoping to go-live) for Murex3 implementation projects (migration and green fields), with focus on P&L, accounting and hedge accounting topics, for EMEA clients.
      EMEA global reviewer of Product Control client business requirements.`,
    },
    {
      company: 'Accenture',
      begin: {
        month: 'oct',
        year: '2014',
      },
      duration: '2 yrs',
      occupation: 'Murex Business analyst',
      description: `I carried on a MX3 migration/installation project for the main merchant bank in Italy as an Accounting and Hedge Accounting specialist at Murex, Paris.
      I have been a Murex consultant for Banca Monte dei Paschi di Siena (MPS), providing user support for both MX2 and MX3. I worked on requirements definition, design, building and testing, with a special focus on MO/BO modules, risk modules and FO reconciliation.
      I have worked on Accounting, Fixing and Realtime (RTBS), Simulation and PLVAR, Reporting (Datamart and MReport), Hedge Accounting, Post-trade and pre-trade workflows, FO tools.
      `,
    },
    {
      company: 'Noivion',
      begin: {
        month: 'apr',
        year: '2012',
      },
      duration: null,
      occupation: 'Board member – founder – former CTO',
      description: `Noivion srl is a company in the field of Thin Film Deposition Equipment and industrial Nanotechnology. `,
    },
    {
      company: 'Siena Solar Nanotech (2SN) S.p.A. and Light4tech srl',
      begin: {
        month: 'feb',
        year: '2010',
      },
      duration: '2 yrs and 2 mos',
      occupation: 'Prototyping Engineer - Project Engineer',
      description: `New prototype development; Maintenance engineer; Scientist. `,
    },
    {
      company: 'IDS spa',
      begin: {
        month: 'jul',
        year: '2009',
      },
      duration: '6 mos',
      occupation: 'Software engineer',
      description: `Calculation libraries development in C++ . `,
    },
    {
      company: 'CNR Pisa',
      begin: {
        month: 'jan',
        year: '2008',
      },
      duration: '1 yr 5 mos',
      occupation: 'Thesist',
      description: `Laser Plasma interactions for fast electron production, computer simulations. `,
    },
    /* ... */
  ],
  social: {
    twitter: '',
    linkedin: 'https://linkedin.com/in/vittorifrancesco',
    github: 'https://github.com/moscardino',
    email: 'whitethree@gmail.com',
  },
  siteUrl: 'localhost:8000',
  pathPrefix: '/portfolio', // Note: it must *not* have a trailing slash.
  siteCover: '/images/owlsret.png',
  googleAnalyticsId: '',
  background_color: '#ffffff',
  theme_color: '#25303B',
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Experience',
      url: '/experience',
    },
    {
      label: 'Skills',
      url: '/skills',
    },
    {
      label: 'Repositories',
      url: '/repositories',
    },
    {
      label: 'download CV',
      url: '/',
    },
  ],
}
