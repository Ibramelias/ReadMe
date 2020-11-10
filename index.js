const inquirer = require("inquirer");
const fs = require("fs");

const generatereadme = (answers) =>
  `
  ##${answers.title}

  ##Description.
  ${answers.description}

  ##Instructions.
  ${answers.instructions}

  ##Usage
  ${answers.usage}


  ##Contribution.
  ${answers.contribution}


  ##Test.
  ${answers.test}


  ##License.
  ${answers.license}

  ##Questions
  https://github.com/${answers.github}

  ##Contact Me.
  You can E-Mail me at ${answers.email}


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
    fs.writeFile("README.md", generatereadme(answers), (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Successfully wrote to index.html");
      }
    });
  });
