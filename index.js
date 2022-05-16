const inquirer = require('inquirer');
const fs = require('fs');

const prompt = {} => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
        }
    ])
}