import {
  displayAt,
  STOPS,
  PAGE_DEPH_MARGIN,
  SKILLS_LIST,
  EXPERIENCE,
} from './constants/pageData';

const configs = {
  title: 'DAYAM NADEEM',
  subTitle: 'CSE Major | jamia hamdard.',
  stars: {
    maxSize: 20,
    emissionIntencity: 40,
    //optionally stars can be an image
    // url: 'icons/three-js-logo.png',
    dencity: 900,
  },
  navTitle: 'Dayam portfolio.',
  relevantStops: STOPS,
  pages: [
    {
      scale: 15,
      rotation: [Math.PI, 0, Math.PI],
      position: [0, 0, -PAGE_DEPH_MARGIN],
      displayAt: displayAt('About'),
      title: 'Who Am I?',
      infos: [
        "* An innovative thinker, initiative taker and multi dimensional beginner with exceptional logical andnalytical skills.currently pursuing a B.Tech in CSE at JAMIA HAMDARD",
        '* Currently learning  Android Development! Intrested in App making ,  project making , Research ,team leading',
        
      ],
    },
    {
      scale: 15,
      displayAt: displayAt('Experience'),
      rotation: [0, -Math.PI / 2, 0],
      position: [-PAGE_DEPH_MARGIN, 0, 0],
      title: 'Experience',
      imageList: EXPERIENCE,
      footer: 'Worked at',
    },
    {
      scale: 15,
      displayAt: displayAt('Skills'),
      rotation: [-Math.PI / 2, 0, -Math.PI / 2],
      position: [0, PAGE_DEPH_MARGIN, 0],
      title: 'Skills',
      footer: 'And more...',
      imageList: SKILLS_LIST,
    },
    {
      scale: 15,
      displayAt: displayAt('Download CV'),
      rotation: [0, 0, 0],
      position: [0, 0, PAGE_DEPH_MARGIN],
      title: 'Here is my CV!',
      footer: 'Click the icon above to view!',
      imageList: {
        rows: 1,
        separation: 3,
        leftPadding: 0,
        topPadding: 0,
        scale: 0.8,
        items: [
          {
            url: 'icons/resume.png',
            websiteURL:
              'https://drive.google.com/file/d/1tmfonLp5a3hPWE2PSTpyTD8VUAYUOn0g/view?usp=sharing',
          },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('CERTIFICATES'),
      rotation: [Math.PI / 2, 0, 0],
      position: [0, -PAGE_DEPH_MARGIN, 0],
      title: 'CERTIFICATES',
      footer: 'Click the icon above to view!',
      imageList: {
        rows: 2,
        separation: 2.5,
        leftPadding: -0.4,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: 'websites-preview/DayamAIINAGRI.png',
            websiteURL: 'https://drive.google.com/file/d/1yA8xRY_i9CzR72au5oYqjPswU_4kgxhw/view?usp=sharing',
          },
          {
            url: 'websites-preview/javacompletedayam.png',
            websiteURL: 'https://drive.google.com/file/d/10PkksFBLXJMbRRP0Pjpe9GGETCAUB0kJ/view?usp=sharing',
          },
          {
            url: 'websites-preview/iitbombaydayam.png',
            websiteURL: 'https://drive.google.com/file/d/1jDsNtuJmpLmxBqlsVGCYhsW-TOcFGxqL/view?usp=sharing',
          },
          {
            url: 'websites-preview/hackthemountdayam.png',
            websiteURL: 'https://drive.google.com/file/d/1LT-jAcO3GxlNYtq0StdRkHF219x32jyv/view?usp=sharing',
          },
          {
            url: 'websites-preview/jmidayam.png',
            websiteURL: 'https://drive.google.com/file/d/1pZfeNWG9EdZQJMBpfjxiNiYxGR1LG5JQ/view?usp=sharing',
          },
          {
            url: 'websites-preview/gdscdayam.png',
            websiteURL: 'https://drive.google.com/file/d/1__fdpeO32XwJjfmp5-dX1WKVZvy7kxlf/view?usp=sharing',
          },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('Get In Touch'),
      rotation: [0, Math.PI / 2, 0],
      position: [PAGE_DEPH_MARGIN, 0, 0],
      title: 'You can find me in:',
      footer: 'Almost done but keep scrolling :)',
      imageList: {
        rows: 2,
        separation: 1.8,
        leftPadding: -0.25,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: 'icons/twitter.png',
            websiteURL: 'https://twitter.com/DayamNadeem  ',
          },
          {
            url: 'icons/linkedin.png',
            websiteURL:
              'https://www.linkedin.com/in/dayam-nadeem-90b395230/',
          },
          {
            url: 'icons/github.png',
            websiteURL: 'https://github.com/dayam8696',
          },
          {
            url: 'icons/email.png',
            websiteURL: 'mailto:dayam8696@gmail.com',
          },
        ],
      },
    },
  ],
};

export default configs;
