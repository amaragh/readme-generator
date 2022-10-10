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
        default: 'N/A'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the the instructions and examples for use of your project?',
        default: 'N/A'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute your project?',
        default: 'N/A'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the guidelines for testing your project?',
        default: 'N/A'
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
    {
        type: 'list',
        name: 'license',
        message: 'Which of the following licenses applies to your project?',
        choices: ['Apache', 'MIT', 'GPL','N/A'],
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
        return writeToFile('README.md', writeMdResponse)
    });
