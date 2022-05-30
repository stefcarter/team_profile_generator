const inquirer = require('inquirer');
const fs = require('fs');

// identifier paths
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const render = require('./src/template.js');

var allMgrData = "";
var allEngData = "";
var allIntData = "";

const empData = [
    {
        type: "list",
        message: "Choose an employee type to add (Must include one Manager): ",
        name: "type",
        choies: ["Manager", "Egineer", "Intern"]
    },
    {
        type: "input",
        message: "Enter Employee's name: ",
        name: "id",
        validate: function(num)
        {
            return /^[0-9]*$/.test(num);
        }
    },
    {
        type: "input",
        message: "Enter Employee's email: ",
        name: "email",
        validate: function(email)
        {
            // credit: https://stackoverflow.com/questions/65189877/how-can-i-validate-that-a-user-input-their-email-when-using-inquirer-npm
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
        }
    }, 
    {
        type: "input",
        message: "Enter Manager's office number: ",
        name: "office",
        when: (data) => data.type === "Manager",
        validate: function(num)
        {
            return /^[0-9]*$/.test(num)
        }
    },
    {
        type: "input",
        message: "Enter Engineer's gitHub username: ",
        name: "git",
        when: (data) => data.type === "Engineer"
    },
    {
        type: "input",
        message: "Enter Intern's school: ",
        name: "school",
        when: (data) => data.type === "Intern"
    },
];

const anotherEmp = [
    {
        type: "list",
        message: "Would you like to add another employee?",
        name:"addAnother",
        choices: ["Yes", "No"],
    }
];

function writeToFile(fileName, fileData) {
    fs.writeFile(fileName, fileData, (err) => {
        err ? console.error(err) : console.log('Success!');
    });
};

function anotherQuest () {
    inquirer
    .prompt(anotherEmp).then(answer => {
        if (answer.addAnother === "Yes") {
            init();
        } else {
            if(allMgrData === "") {
                console.log("You must have at least one Manager designated for to the team.");
                anotherQuest();
            } else {
                writeToFile("./dist/index.html", render.renderPage(allMgrData, allEngData, allIntData))
            }
        };
    });
};

function init() {
    inquirer
    .prompt(empData)
    .then(data => {
        switch(data.type) {
            case("Manager"):
                if(allMgrData != ""){
                    console.log("You can't have more than 1 Manager per Team.");
                    anotherQuest();
                    break;
                } else {
                    const newMgr = new Manager(data.employee, data.id, data.email, data.office);
                    allMgrData += (render.renderManger(newMgr.name, newMgr.getRole(), newMgr.id, newMgr.email, newMgr.officeNumber));
                    anotherQuest();
                    break;
                }
            case("Engineer"):
                const newEng = new Engineer(data.employee, data.id, data.email, data.git);
                allEngData += (render.renderEngineer(newEng.name, newEng.getRole(), newEng.id, newEng.email, newEng.github));
                anotherQuest();
                break;
            case("Intern"):
                const newInt = new Intern(data.employee, data.id, data.email, data.school);
                allIntData += (render.renderIntern(newInt.name, newInt.getRole(), newInt.id, newInt.email, newInt.school));
                anotherQuest();
                break;
        };
    });
};

init()