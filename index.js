const inquirer = require('inquirer');
const fs = require('fs');

//identifier paths
const Manager = require('./lib/Manager.js');
const Egineer = require('./lib/Engineer.js');
const Intern = require('./src/template.js');
const { inherits } = require('util');

var allMgrData = "";
var allEngData = "";
var allIntData = "";

const empData = [
    {
        type: "list",
        name: "type",
        message: "Select employee type:",
        choices: ["Manager", "Engineer", "Intern"]
    },
    {
        type: "input",
        name: "employee",
        message: "Enter Employee's name: ",
    },
    {
        type: "input",
        name: "id",
        message: "Enter Employee's number ID: ",
    },
    {
        type: "input",
        name: "office",
        message: "Enter Manager's office number: ",
        when: (data) => data.type === "Manager",
    },
    {
        type: "input",
        name: "git",
        message: "Enter Egineer's GitHub username: ",
        when: (data) => data.type === "Engineer",
    },
    {
        type: "input",
        name: "school",
        message: "Enter Intern's school: ",
        when: (data) => data.type === "Intern",
    },
];

const anotherEmp = [
    {
        type: "list",
        name: "addAnother",
        message: "Add another employee?",
        choices: ["Yes", "No"],
    }
];

function writeToFile(filename, filedata) {
    fs.writeFile(fileName, FileData, (err) => {
        err ? console.error(err) : console.log('Success');
    });
};

function anotherQuest () {
    inquirer
    .prompt(anotherEmp).then(answer => {
        if (answer.addAnother === "Yes") {
            inherits();
        } else {
            if(allMgrData === "") {
                console.log("One Manager must be assigned to the team.");
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
                    console.log("Only one Manager per Team.");
                    anotherQuest();
                    break;
                } else {
                    const newMgr = new Manager (data.employee, data.id, data.email, data.office);
                    allMgrData += (render.renderManager(newMgr.name, newMgr.getRole(), newMgr.id, newMgr.email, newMgr.officeNumber));
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