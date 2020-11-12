const inquirer = require("inquirer");
const fs = require("fs");

const generateReadme = (answers) =>
  `
  ## ${answers.title}
  | Your favorite application.

  ## Table of Contents.
  - [Description](#Description)
  - [Installation](#instructions)
  - [Usage](#Usage)
  - [Contribution](#Contribution)
  - [Tests](#Tests)
  - [Portoflio](#Portoflio)
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
  You can E-Mail me at
   ${answers.email}

  ## Visit my Portoflio
  https://github.com/${answers.github}


  ## Screenshot.
  ![](Screen20%Shot20%2020-11-1120%at20%8.17.2620%PM.png)

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
      message: "select your licnese",
      choices: ["MIT", "ISC", "zLib License"]
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
