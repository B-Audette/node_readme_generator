const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

// function to write README file
function writeReadme(fileName, data) {

    fs.writeFile(fileName, data, function (error) {
        if (error) {
            return console.log(error);
        }
        console.log("All set!");
    })
}

function init() {

    inquirer.prompt([
        {
            type: "input",
            name: "github",
            message: "What is your username for GitHub?"
          },{
            type: "input",
            name: "email",
            message: "What email address may users contact you through for this?"
          },
        {
            type: "input",
            name: "title",
            message: "What is the title of your project/readme?"
        },
        {
            type: "input",
            name: "description",
            message: "Provide a short description of this project/repository."
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation steps, dependencies, or commands."
        },
        {
            type: "input",
            name: "use",
            message: "What is this meant to be used for?"
        },
        {
            type: "input",
            name: "contributors",
            message: "If a user would like to contribute to this project, what do they need to know?"
        },
        {
            type: "input",
            name: "tests",
            message: "What testing was completed?"
        },
        {
            type: "list",
            name: "license",
            message: "Select a license for your README file.",
            choices: ["GNU GPL v2", "GNU GPL v3", "GNU LGPL v3", "MIT", "No License"]
        },
        ]).then(function (response) {
            const data = generateMarkdown(response);

            writeReadme("newreadme.md", data);
        })

}

init();


