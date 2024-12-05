// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![Generic badge](https://img.shields.io/badge/License-MIT-green.svg)](https://shields.io/)`;
  } else if (license === "Apache 2.0") {
    return `[![Generic badge](https://img.shields.io/badge/License-Apache 2.0-red.svg)](https://shields.io/)`;
  } else if (license === "GPL 3.0") {
    return `[![Generic badge](https://img.shields.io/badge/License-GPL3.0-blue.svg)](https://shields.io/)`;
  } else if (license === "BSD 3-Clause") {
    return `[![Generic badge](https://img.shields.io/badge/License-BSD-purple.svg)](https://shields.io/)`;
  } else {
    return "None";
  }
}

// assign a variable to the license URLs
const mit = "https://opensource.org/license/MIT";
const apache = "https://www.apache.org/licenses/LICENSE-2.0.html";
const gpl = "https://www.gnu.org/licenses/gpl-3.0.en.html";
const bsd = "https://opensource.org/license/BSD-3-clause";

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return mit;
  } else if (license === "Apache 2.0") {
    return apache;
  } else if (license === "GPL 3.0") {
    return gpl;
  } else if (license === "BSD 3-Clause") {
    return bsd;
  } else {
    return "None";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `${renderLicenseBadge(license)}
   
  ${renderLicenseLink(license)} 
   `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // return `# ${data.title} // return the rest of the README, sections, badges, links
  
 return `${renderLicenseSection(data.license)} ${data.title} ${data.video} ${data.installation} ${data.usage} ${data.contributing} ${data.tests} `;
}

export default generateMarkdown;
