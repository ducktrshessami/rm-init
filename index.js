const fs = require("fs").promises; // File I/O
const { prompt } = require("inquirer"); // User input
const generateMarkdown = require("./utils/generateMarkdown"); // It's in the module name

// array of questions for user
const questions = [
    {
        type: "input",
        message: "Project title:",
        name: "title"
    },
    {
        type: "input",
        message: "Description:",
        name: "desc"
    },
    {
        type: "input",
        message: "Installation:",
        name: "install"
    },
    {
        type: "input",
        message: "Usage:",
        name: "usage"
    },
    {
        type: "input",
        message: "Contribution guidelines:",
        name: "contrib"
    },
    {
        type: "input",
        message: "Testing:",
        name: "test"
    },
    {
        type: "list",
        message: "License:",
        choices: [
            "UNLICENSED",
            "ISC",
            "MIT",
            "Apache-2.0",
            "GPL-3.0"
        ],
        name: "lisc"
    },
    {
        type: "input",
        message: "GitHub username:",
        name: "github"
    },
    {
        type: "input",
        message: "E-mail:",
        name: "email"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data).catch(console.error);
    /*
    Why make a function just to call fs.writeFile with the same params?
    */
}

// function to initialize program
function init() {
    prompt(questions)
        .then(generateMarkdown)
        .then(md => writeToFile("asdf.md", md))
        .catch(console.error);
}

// function call to initialize program
init();
