const Engineer = require("../lib/Engineer.js")

describe("Engineer", () => {
    describe("constructor", () => {
        it("should provide the engineer's name, id number, email address and github when arguments are passed.", () => {
            const name = "Carter";
            const id = 111;
            const email = "carter@fake.com";
            const github = "trailRun";
            const emp = new Engineer(name, id, email, github);
            expect(emp.name).toEqual(name);
            expect(emp.id).toEqual(id);
            expect(emp.email).toEqual(email);
            expect(emp.github).toEqual(github);

        });
    });
    describe("getGithub", () => {
        it("should return the value of the 'github' parameter", () => {
            const name = "Carter";
            const id = 111;
            const email = "carter@fake.com";
            const github = "trailRun";
            const expected = "trailRun";
            const emp = new Engineer(name, id, email, github);
            const answer = emp.getGithub();
            expect(answer).toEqual(expected);
        });
    });
    describe("getRole", () => {
        it("should return the value of the engineer's role", () => {
            const expected = "Engineer";
            const emp = new Engineer();
            const answer = emp.getRole();
            expect(answer).toEqual(expected);
        });
    });
});