// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license == 'Apache') {
    return '![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
  } else if (license == 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (license == 'GPL') {
    return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  } else {
    return '';
  }

}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license == 'Apache') {
    return 'https://opensource.org/licenses/Apache-2.0';
  } else if (license == 'MIT') {
    return 'https://opensource.org/licenses/MIT';
  } else if (license == 'GPL') {
    return 'https://www.gnu.org/licenses/gpl-3.0';
  } else {
    return '';
  }
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != 'N/A') {
    return `
  ## License
  [${license}](${renderLicenseLink(license)})`;
  } else {
    return '';
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Feel free to visit my [GitHub profile](https://github.com/${data.github}) to review my published work. I can also be contacted by [email](mailto:${data.email}). 

  ${renderLicenseSection(data.license)}
  `;
}

module.exports = generateMarkdown;