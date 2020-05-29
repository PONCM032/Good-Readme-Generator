//fs require
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
//
const writeFileAsync = util.promisify(fs.writeFile);
// const { questions } = require("./Questions");

//call questions array in Questions.js
// function promptUser() {
//   return inquirer.prompt(questions);
// };

function promptUser() {
  return inquirer.prompt([
  {
      type: "input",
      name: "name",
      message: "What is your GitHub username?",
      validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        }
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
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
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
    return `
  **#${answer.project}**

  ${answer.description}

  ##${answer.name}

  ---
  
  This site was built using [GitHub Pages](${answer.URL}).

  
  ${answer.license}
  ${answer.command}
  ${answer.test}
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

//# creates heading
//## creates desciptions

//psuedocode
//create npm package.json
//will have all dependencies
//install inquirer

//have .gitignore for node_modules

//require your dependencies
//write read me file - fs


//write down prompts to get required info from user
//array
//each question is an object
//type, name, message (autofillers)

//Build out ReadMe template
//make it look like how you want it
//then bring it into JS file

//write the file
//plug and play with gathered info

// fs.writeFile("README.md", generateReadMe, function(err) {
//  if(err){
//    console.log(err);
//   }else{
//     console.log("ReadMe has been successfully generated!");
//   }
// }); //init();

// async function init() {
//   t
// init();

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();


// try {
//   // const answer = await promptUser();
//   // const readMe = generateReadMe(answers);
//   // await writeFileAsync("build/README.md", readMe);
//   console.log("ReadMe has been successfully generated!");
// } catch (err) {
//   console.log(err);
// }