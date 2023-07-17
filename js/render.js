import { projectDataObject } from "./project.js";

const nav = document.querySelector("nav");
const root = document.querySelector(".root");
const projectlist = document.querySelector(".projectlist");
const pageArray = ["portfolio", "projects", "CONTACT"];
const projectData = document.querySelector(".projectdata");
const contactpage = document.querySelector(".ContactPage");
let gloableProjectSelection = 0;
const ProjectNameArray = [
  ...projectDataObject.map((project) => {
    return project.projectName;
  }),
];

//pages
const skillPage = document.querySelector(".skillPage");

function detectDevice() {
  // var isPhone =
  //   window.innerWidth ||
  //   document.documentElement.clientWidth ||
  //   document.body.clientWidth;
  // return isPhone <= 720 ? true : false;

  var isMobile =
    /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone/i.test(
      navigator.userAgent
    );
  return isMobile ? true : false;
}

function navRedner(pageIndex) {
  if (!detectDevice()) {
    nav.innerHTML = `<div class="navitem left ${
      pageIndex === 0 ? "selectedNav" : ""
    }">portfolio</div>
    <div class="navitem mid ${
      pageIndex === 1 ? "selectedNav" : ""
    }">projects</div>
    <div class="navitem right ${
      pageIndex === 2 ? "selectedNav" : ""
    }">CONTACT</div>`;
  } else {
    nav.innerHTML = `<div class="navitem left ${
      pageIndex === 0 ? "selectedNav" : ""
    }">portfolio</div>
    <div class="navitem mid ${
      pageIndex === 1 ? "selectedNav" : ""
    }">projects</div>
    <div class="navitem right ${
      pageIndex === 2 ? "selectedNav" : ""
    }">CONTACT</div>`;
  }
}
function ContactRedner(isMobile) {
  if (!isMobile) {
    contactpage.innerHTML = `
    <div class="contact" onclick="openInstagram('i')">
    <img src="./assets/instagram1.png" alt="" class="contactImg" />
    <span class="contactText">INSTAGRAM</span>
  </div>
  
  <div class="contact" onclick="openInstagram('l')">
    <img src="./assets/linkedin1.png" alt="" class="contactImg" />
    <span class="contactText">LINKEDIN</span>
  </div>
  
  <div class="contact" onclick="openInstagram('g')">
    <img src="./assets/gmail1.png" alt="" class="contactImg" />
    <span class="contactText">GMAIL</span>
  </div>
  
    `;
  } else if (isMobile) {
    contactpage.innerHTML = `
    <div class="contact" onclick="openInstagram('i')">
    <img src="./assets/instagram1.png" alt="" class="contactImg" />
    <span class="contactText">INSTAGRAM</span>
  </div>
  
  <div class="contact" onclick="openInstagram('l')">
    <img src="./assets/linkedin1.png" alt="" class="contactImg" />
    <span class="contactText">LINKEDIN</span>
  </div>
  
  <a class="contact" href="mailto:newraozxcode@gmail.com">
    <img src="./assets/gmail1.png" alt="" class="contactImg" />
    <span class="contactText">Gmail</span>
  </a>
  <div class="resumeDownload">DOWNLOAD RESUME</div>
    `;
  }
}
function skillpageRedner(isPhone) {
  console.log("isphone : ", isPhone);
  if (isPhone) {
    skillPage.innerHTML = `<div class="skillPageContent">
    <div class="name">NIKHIL RAO</div>
    <div class="skillContent">
      <div class="skillheading">|| skills ||</div>
      <div class="skills">
        <span class="skill">HTML / CSS / SCSS</span>
        <span class="skill">JAVASCRIPT</span>
        <span class="skill">REACT.JS</span>
        <span class="skill">NODE.JS</span>
      </div>
    </div>
  </div>
  <img
    class="homepageImage kakashi"
    src="./assets/kakashiOriginal.jpg"
    alt="narutoImage"
  />`;
  } else if (!isPhone) {
    skillPage.innerHTML = ` <div class="skillPageContent">
          <div class="name">NIKHIL RAO</div>
          <div class="skillContent">
            <div class="skillheading">|| skills ||</div>
            <div class="skills">
              <span class="skill">HTML / CSS / SCSS</span>
              <span class="skill">JAVASCRIPT</span>
              <span class="skill">REACT.JS</span>
              <span class="skill">NODE.JS</span>
            </div>
          </div>
        </div>
        <img
          class="homepageImage"
          src="./assets/naruto_sage_mode 1.png"
          alt="narutoImage"
        />`;
  }
}

function projectListRender() {
  return projectDataObject
    .map((project, index) => {
      return `<span class="project" style= "background:${
        gloableProjectSelection == index ? "rgba(0, 114, 213, 0.5);" : ""
      }" >${project.projectName}</span>`;
    })
    .join("");
}

function ProjectDataRender(projectIndex) {
  const linksArray = Object.entries(projectDataObject[projectIndex].LINKS);
  const linksHTML = linksArray
    .map(([key, value]) => `<a class="link" href="${value}">${key}</a>`)
    .join(" ");

  const isMobile = detectDevice();

  if (!isMobile) {
    projectData.innerHTML = `<div class="projectname">
    ${projectDataObject[projectIndex].projectName}
    </div>
    <div class="discriptionContainer">
      <div class="discriptionHeading">discription ~</div>
      <div class="discription">
        ${projectDataObject[projectIndex].discription}
      </div>
    </div>
    <div class="linkContainer">
      <div class="linkheading">LINKS ~</div>
      <div class="links">
      ${linksHTML}
      </div>
    </div>
   ${
     projectIndex != 3
       ? `<div class="imageContainer">
      <div class="imageheading">PHOTOS ~</div>
      <div class="images" style="background: ${
        projectIndex === 2 ? "rgba(15, 15, 15, 0.8)" : "none"
      }">
      ${
        projectDataObject[projectIndex].PHOTOS.length > 0
          ? projectDataObject[projectIndex].PHOTOS.map((image) => {
              return ` <img
        class="projectImage"
        src=${image}
        alt="image"
        srcset=""
      />`;
            }).join("")
          : ""
      } 
     
     
    </div>`
       : ""
   }
  
    </div>`;
  } else if (isMobile) {
    projectData.innerHTML = `<div class="projectDetails">
      <span class="projectDetailHeading">-PROJECT DETAILS-</span>

      <div class="discriptionContainer">
      
      <span class="discriptionheading">
      DISCRIPTION-
      </span>
      
      <span class="discription">
      ${projectDataObject[projectIndex].discription}
      </span>
      </div>

      <div class="LinkContainer">
      <span class="linkHeading">LINKS-</span>
      <div class="links">
      ${linksHTML}
      </div>
      </div>
      </div>`;
  }
}

navRedner(0);
skillpageRedner(detectDevice());

nav.addEventListener("click", (e) => {
  const SelectedPage = e.target.textContent;
  const pageIndex = pageArray.indexOf(SelectedPage);
  console.log("selected page  : ", SelectedPage, pageIndex);
  console.log(-100 * pageIndex);
  if (pageIndex != -1) {
    root.style.transform = `translateX(${-100 * pageIndex}vw)`;
  }

  navRedner(pageIndex);
  if (pageIndex === 1) {
    ProjectDataRender(0);
  }
  if (pageIndex === 2) {
    ContactRedner(detectDevice());
  }
});

projectlist.innerHTML = projectListRender();

projectlist.addEventListener("click", (e) => {
  const selectedProject = e.target.textContent;
  const projectIndex = ProjectNameArray.indexOf(selectedProject);

  gloableProjectSelection = projectIndex;
  //recalling the render of project list to make the changes
  projectlist.innerHTML = projectListRender();
  ProjectDataRender(projectIndex);
});
