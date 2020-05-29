//fs require
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

//inquirer array
function promptUser() {
  return inquirer.prompt([
  {
      type: "input",
      name: "name",
      message: "What is your GitHub username?",
      // validate: answer => {
      //     if (answer !== "") {
      //       return true;
      //     }
      //     return "Please enter at least one character.";
      //   }
  },
  {
      type: "input",
      name: "email",
      message: "What is your email?"
  },
  {
      type: "input",
      name: "URL",
      message: "What is the URL to your project?"
  },
  {
      type: "input",
      name: "project",
      message: "What is your project's name?"
  },
  {
      type: "input",
      name: "description",
      message: "Please write a short description of your project"
  },
  {
      type: "list",
      name: "license",
      message: "What kind of license should your project have?",
      choices: ["MIT","APACHE 2.0","GPL 3.0","BSD 3","MPL 2.0","None"]
  },
  {
      type: "input",
      name: "command",
      message: "What command should be run to install dependencies?",
      default: "npm i"
  },
  {
      type: "input",
      name: "test",
      message: "What command should be run to run tests?",
      default: "npm test"
  },
  {
      type: "input",
      name: "using",
      message: "What does the user need to know about using the repo?"
  },
  {
      type: "input",
      name: "contributing",
      message: "What does the user need to know about contributing to the repo?"
  }
]);
}

function generateReadMe(answer) {

  let genLicense

  if(answer.license === "MIT"){
    genLicense = "[![license](https://img.shields.io/github/license/DAVFoundation/captain-n3m0.svg?style=flat-square)](https://github.com/DAVFoundation/captain-n3m0/blob/master/LICENSE)";
  }else if(answer.license === "APACHE 2.0") {
    genLicense = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }else if(answer.license === "GPL 3.0") {
    genLicense = "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)";
  }else if(answer.license === "BSD 3"){
    genLicense = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  }else if(answer.license === "MPL 2.0"){
    genLicense = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  }else{
    genLicense = "[![License: Unlicensed](https://img.shields.io/badge/license-Unlicense-blue.svg)](https://unlicense.org/)";
    }
  
return `
# **${answer.project}** ${genLicense}

### Description:

${answer.description}

---

This site was can be found in the following [GitHub repository](${answer.URL}).

---
  
Below are the following commmands needed for this project:

-To install :

  -${answer.command}

-To test : 

  -${answer.test}

---

##This project was complete by **${answer.name}**


${answer.using}
${answer.contributing}
    `
    
  };

promptUser().then(function(answers) {
  const readMe = generateReadMe(answers);

  return writeFileAsync("README.md", readMe);
}).then(function(){
  console.log("ReadMe has been successfully generated!");
}).catch(function(err) {
  console.log(err);
});