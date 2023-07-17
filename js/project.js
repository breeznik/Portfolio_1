const DevTrackerimagePaths = [
  "..\\assets\\devTrackerImages\\Admin-dashbaord-active-project.jpg",
  "..\\assets\\devTrackerImages\\Admin-dashbaord-history-project.jpg",
  "..\\assets\\devTrackerImages\\Admin-login.jpg",
  "..\\assets\\devTrackerImages\\Admin-project-AddDev.jpg",
  "..\\assets\\devTrackerImages\\Admin-project-Assigndev.jpg",
  "..\\assets\\devTrackerImages\\Admin-project-modules.jpg",
  "..\\assets\\devTrackerImages\\Admin-Project.jpg",
  "..\\assets\\devTrackerImages\\dev-Files.jpg",
  "..\\assets\\devTrackerImages\\dev-login.jpg",
  "..\\assets\\devTrackerImages\\dev-PhaseBoard.jpg",
  "..\\assets\\devTrackerImages\\dev-Testboard-selection.jpg",
];
const DogoVimages = [
  "..\\assets\\dogoVimages\\1.png",
  "..\\assets\\dogoVimages\\2.png",
  "..\\assets\\dogoVimages\\3.png",
];
const PORTFOLIO_V1 = [
  "..\\assets\\Portfolio_v1\\1.jpg",
  "..\\assets\\Portfolio_v1\\2.jpg",
  "..\\assets\\Portfolio_v1\\3.jpg",
  "..\\assets\\Portfolio_v1\\4.jpg",
  "..\\assets\\Portfolio_v1\\5.png",
];
const PORTFOLIO_V2 = [
  "..\\assets\\Portfolio_v2\\1.png",
  "..\\assets\\Portfolio_v2\\2.png",
  "..\\assets\\Portfolio_v2\\3.png",
];
const projectDataObject = [
  {
    projectName: "DEVTRACKER",
    discription: `JIRA inspired project tracking Web App built with MERN
  Stack.Divided into two application - Admin & Dev, admin have
  features to create project & assign project to Developers and can
  also create or remove Dev account. In DevApplication Developer can
  change the Phase of the module according to their Progress and
  assign test score to individual module or upload files.`,

    LINKS: {
      github: `https://github.com/newraozx1/DevTracker`,
      DesignLink: `https://www.figma.com/file/NHkbq4x3FZfsPAMgVWix0f/endsem_V2_ResumeShared?type=design&node-id=0%3A1&mode=design&t=pimNnVamFCsI8q4y-1`,
      VideoLink: `https://lnkd.in/dv4Bu5tc`,
    },
    PHOTOS: DevTrackerimagePaths,
  },
  {
    projectName: "DOGO_V",
    discription: `Search for dog breeds and download the pictures (derived from the Ninja API). Built with React, Chakra UI, and the File-saver package for download options.`,

    LINKS: {
      github: `https://github.com/newraozx1/Project2_Dogo/tree/main/docatsaver`,
      siteLink: `https://dogovesite.web.app/`,
    },
    PHOTOS: DogoVimages,
  },

  {
    projectName: "PORTFOLIO_V2",
    discription: `portfolio site displaying my skills and project, the site is divided into three pages - skills , project , contact. 
      BUILT WITH - RAW JAVASCRIPT / CSS / HTML`,

    LINKS: {
      siteLink: `https://breez-portfolio2.web.app/`,
      github: `https://github.com/newraozx1/DevTracker`,
      DesignLink: `https://www.figma.com/file/9aft7S6tyQVTY15uTm8kpK/Portfolio_v2_shared?type=design&node-id=0%3A1&mode=design&t=x6tNTgG0rlLGgmqJ-1`,
    },
    PHOTOS: PORTFOLIO_V2,
  },
  {
    projectName: "PORTFOLIO_V1",
    discription: `simple portfolio site displaying my skills and projects.
      Built with React. (note - data is not updated).`,
    LINKS: {
      github: `https://github.com/newraozx1/Project_portfolio`,
      siteLink: `https://breeznikport.web.app/`,
    },
  },
];

export { projectDataObject };
