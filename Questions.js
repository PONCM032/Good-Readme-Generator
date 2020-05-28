module.exports = {

questions:[
    {
        type: "input",
        name: "name,",
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
        type: "input",//autofill (npm i)
        name: "command",
        message: "What command should be run to install dependencies?"
    },
    {
        type: "input",//autofill (npm test)
        name: "test",
        message: "What command should be run to run tests?"
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
]};
