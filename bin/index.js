#!/usr/bin/env node

const fs = require("fs").promises; // File I/O
const { prompt } = require("inquirer"); // User input
const generateMarkdown = require("../utils/generateMarkdown"); // It's in the module name

// array of questions for user
const questions = [
    {
        type: "input",
        message: "Project title:",
        name: "title",
        prefix: ""
    },
    {
        type: "input",
        message: "Description:",
        name: "desc",
        prefix: ""
    },
    {
        type: "input",
        message: "Installation:",
        name: "install",
        prefix: ""
    },
    {
        type: "input",
        message: "Usage:",
        name: "usage",
        prefix: ""
    },
    {
        type: "input",
        message: "Contribution guidelines:",
        name: "contrib",
        prefix: ""
    },
    {
        type: "input",
        message: "Testing:",
        name: "test",
        prefix: ""
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
        name: "lic",
        prefix: ""
    },
    {
        type: "input",
        message: "GitHub username:",
        name: "github",
        prefix: ""
    },
    {
        type: "input",
        message: "E-mail:",
        name: "email",
        prefix: ""
    }
];

// default output file
var outputFile = "README.md";

// handle possible flags
function handleArgs() {
    for (let i = 0; i < process.argv.length; i++) {
        switch (process.argv[i]) {
            case "-o":
            case "--output":
                if (i == process.argv.length - 1) {
                    printUsage();
                    return false;
                }
                else {
                    outputFile = process.argv[++i];
                }
                break;
        }
    }
    return true;
}

// print usage text
function printUsage() {
    console.log(`Usage: rminit [[-o | --output] filename]`);
}

// function to initialize program
function init() {
    if (handleArgs()) {
        prompt(questions)
            .then(generateMarkdown)
            .then(md => fs.writeFile(outputFile, md))
            .catch(console.error);
    }
}

// function call to initialize program
init();
