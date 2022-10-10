// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project? (Required)',
        validate: projTitleInput => {
            if (projTitleInput) {
                return true
            } else {
                console.log("Please enter the title of the project!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a brief description for your project. (Required)',
        validate: descInput => {
            if (descInput) {
                return true
            } else {
                console.log("Please enter a description for your project!");
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username? (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true
            } else {
                console.log("Please enter your GitHub username!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true
            } else {
                console.log("Please enter your email address!");
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(`./dist/${fileName}`, data, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        })
    })
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
    .then(responseData => {
        return generateMarkdown(responseData);
    })
    .then(writeMdResponse => {
        writeToFile('README.md', writeMdResponse)
    });
