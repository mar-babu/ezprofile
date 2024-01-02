// gitprofile.config.js

const config = {
  github: {
    username: 'mar-babu', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['marahman', 'Social-Complainer', 'BUBT-photography-club', 'Child-Day-care ', 'Edulearn-laravel ',
        'Vandely-Design', 'cv-with-html-css-', 'TestLab ', 'Racer-Ecommerce ', 'O-Cus', 'my_react_app',
        'Created-React-FRESH-App', 'PHP-Mastering', 'e-shop', 'Javascript-basics_Rexercises', 'acv',
        'ant_food', 'food-app', 'ant-food'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
  },
  social: {
    linkedin: 'md-abdur-rahman-368330139',
    twitter: 'MarAbdur',
    mastodon: 'arifszn@mastodon.social',
    facebook: 'mar.babu1',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'marbabu',
    stackoverflow: '7699819/abdur-rahman', // example: '1/jeff-atwood'
    skype: 'mar_babu\n',
    telegram: '',
    website: 'https://marbabu.wixsite.com/mysite',
    phone: '+8801681195152',
    email: 'ar_cse@yahoo.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'Vue.Js',
    'Alpine.Js',
    'MySQL',
    'Git',
    'CSS',
    'LESS',
    'SASS',
    'Html5',
    'Jquery',
    'Ajax',
    'Bootstrap',
    'Livewire',
    'React.js',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Xgenious',
      position: 'Software Engineer',
      from: 'October 2022',
      to: 'Present',
      companyLink: 'https://xgenious.com',
    },
    {
      company: 'Tappware Solutions Limited',
      position: 'Software Engineer',
      from: 'March 2021',
      to: 'September 2022',
      companyLink: 'http://www.tappware.com',
    },
    {
      company: 'Luminouslabs',
      position: 'Software Engineer',
      from: 'October 2020',
      to: 'February 2021',
      companyLink: 'https://luminouslabsbd.com',
    },
  ],
  certifications: [
    {
      name: 'Mastering Vue.js',
      body: 'Certiﬁcation from ostad.com (Hasin Hayder)',
      year: 'December 2023',
      link: 'https://ostad.app/share/certificate/c7693-md.-abdur-rahman'
    },
    {
      name: 'SQL (Basic)',
      body: 'Certiﬁcation from hackerrank.com',
      year: 'March 2022',
      link: 'https://www.hackerrank.com/certificates/9fc783f086a5'
    },
    {
      name: 'The Ultimate JavaScript Mastery Series',
      body: 'Certiﬁcation fromcodewithmosh.com',
      year: 'February 2021',
      link: '#'
    },
    {
      name: 'Programming Foundations with JavaScript, HTML and CSS',
      body: 'Certiﬁcation from coursera.org',
      year: 'July 2020',
      link: 'https://www.coursera.org/account/accomplishments/certificate/2RPR5KUJWYHD'
    },
    {
      name: 'Front-End Web UI Frameworks and Tools',
      body: 'Certiﬁcation from coursera.org',
      year: 'September 2020',
      link: 'https://www.coursera.org/account/accomplishments/certificate/FGPXJNWTEUV7'
    },
  ],
  education: [
    {
      institution: 'Bangladesh University of Business and Technology',
      degree: 'Bachelor of Science',
      from: '2015',
      to: '2019'
    },
    {
      institution: 'Major General Mahmudul Hasan Ideal College',
      degree: 'Higher Secondary Certificate (HSC)',
      from: '2012',
      to: '2014',
    },
    // {
    //     institution: 'Dighulia Shahid Mizanur Rahman High School',
    //     degree: 'Secondary School Certificate (SSC)',
    //     from: '2006',
    //     to: '2011'
    // }
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'marbabu', // to hide blog section, keep it empty
    limit: 7, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '3811149',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
