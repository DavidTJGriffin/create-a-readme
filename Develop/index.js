
var inquirer = require('inquirer');
var generateMarkdown = require('./utils/generateMarkdown');
var fs = require('fs');
const { NONAME } = require('dns');


const questions = [{
    type: 'input',
    name: 'title',
    message: "What is the name of your project?",
}, {
    type: 'input',
    name: 'description',
    message: "What is your description?",
},
{
    type: 'input',
    name: 'installation',
    message: "How do we install the app?",
},
{
    type: 'input',
    name: 'usage',
    message: "What is the usage of the app?",
},
{
    type: 'input',
    name: 'credits',
    message: "Who are the contributors of the project?",
},
{
    type: 'list',
    name: 'license',
    message: "What is the license of the project?",
    choices: ["GPL License", "MIT License", "Apache License 2.0", "BSD License", "Mozilla Public License 2.0", "None"],
    default: 'none'
},
{
    type: 'input',
    name: 'features',
    message: "What are the features of the project?",
},
{
    type: 'input',
    name: 'contribute',
    message: "How can people contribute to the project?",
},
{
    type: 'input',
    name: 'test',
    message: "How can people test the project?",
},
];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (error, success) {
        if (error) throw error;
        console.log(fileName + "created successfully");
    })
}


function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            // Use user feedback for... whatever!!
            console.log(answers);
            //convert into the readme friendly format 
            const readmeFormat = generateMarkdown(answers);
            console.log(readmeFormat)

            //call the write file function to create e
            writeToFile("README.md", readmeFormat);
        })
}

// Function call to initialize app
init();
