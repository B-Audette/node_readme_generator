function addLicenseBadge(license) {
  if (license === "GNU GPL v2") {
    return `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`;
  }
  else if (license === "GNU GPL v3") {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  }
  else if (license === "GNU LGPL v3") {
    return `![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)`;
  }
  else if (license === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  }
  else (license === "No License") 
    return ( ``)
}

  function writeLicenseInfo(license) {
    return (`## License Info
This is licensed with the ${license} license.`)
}

function generateMarkdown(data) {
  return `
  # ${data.title}
  ${writeLicenseInfo(data.license)}
  ${addLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)

  * [Use](#use)

  * [Tests](#tests)

  * [Contributors](#contributors)

  ## Installation
  ${data.installation}

  ## Use
  ${data.use}

  ## Tests
  ${data.tests}

  ## Contributors
  ${data.contributors}
  
  ## Questions

  I am open for questions and feedback on this repository, please contact me directly at ${data.email}. 
  For other projects I've worked on, see [${data.github}](https://github.com/${data.github}/).

`;
}

module.exports = generateMarkdown;
