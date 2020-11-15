const inquirer = require("inquirer");
const fs = require("fs");

const generateReadme = (answers) =>
  `
  ## License
  ${answers.license}

  ## ${answers.title}
  | Your favorite application.

  ## Table of Contents.
  - [Description](#Description)
  - [Installation](#instructions)
  - [Usage](#Usage)
  - [Contribution](#Contribution)
  - [Test](#Test)
  - [Questions](#Questions)
   

  ## Description.
  ${answers.description}

  ## Installation.
  ${answers.instructions}

  ## Usage
  ${answers.usage}

  ## Contribution.
  ${answers.contribution}


  ## Test.
  ${answers.test}


  ## Questions
  [Shoot me an emial](${answers.email})
  [Visit my GitHub](https://github.com/${answers.github})


  ## Walkthrough of application & supporting images.
  ![](img/Screen%20Shot%202020-11-11%20at%208.17.26%20PM.png)

  `;

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project title?",
    },
    {
      type: "input",
      name: "description",
      message: "What is you project description ?",
    },
    {
      type: "input",
      name: "instructions",
      message: "Enter project instructuion:",
    },
    {
      type: "input",
      name: "usage",
      message: "Enter project usage instructions:",
    },
    {
      type: "input",
      name: "contribution",
      message: "Enter project contribution guidelines:",
    },
    {
      type: "input",
      name: "test",
      message: "How to test your project?",
    },
    {
      type: "list",
      name: "license",
      message: "Please select your license you wish to use ( MIT, IBM, Mozilla, Apache, Zlib)",
      choices: ["[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)",
      "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
      "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)", "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",



      ]
    },
    {
      type: "input",
      name: "email",
      message: "Enter your E-Mail:",
    },
    {
      type: "input",
      name: "github",
      message: "Enter your github username:",
    }
  ])


  .then((answers) => {
    fs.writeFile("README.md", generateReadme(answers), (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Successfully wrote to index.html");
      }
    });
  });
