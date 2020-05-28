//fs require
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);
const {questions} = require("./Questions");

//call questions array in Questions.js
function promptUser(){
    return inquirer.prompt(questions);
};

function generateReadMe(answers) {
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Document</title>
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Hi! My name is ${answers.name}</h1>
      <p class="lead">I am from ${answers.location}.</p>
      <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is ${answers.github}</li>
        <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
      </ul>
    </div>
  </div>
  </body>
  </html>`;
  }

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


    async function init (){
        try{
            const answer = await promptUser();
            const readMe = generateReadMe(answers);
            await writeFileAsync("build/README.md", readMe);
            console.log("Wrote ReadMe!");
        }catch(err){
            console.log(err);
        } 
    } 
    init();
    
// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
