const Manager = require("../lib/Manager.js")

describe("Manager", () => {
    describe("constructor", () => {
        it("should provide the managers's name, id number, email address and office number when arguments are passed.", () => {
            const name = "Carter";
            const id = 111;
            const email = "carter@fake.com";
            const officeNumber = 113;
            const emp = new Manager(name, id, email, officeNumber);
            expect(emp.name).toEqual(name);
            expect(emp.id).toEqual(id);
            expect(emp.email).toEqual(email);
            expect(emp.officeNumber).toEqual(officeNumber);
        });
    });
    describe("getRole", () => {
        it("should return the value of the manager's role", () => {
            const expected = "Manager";
            const emp = new Manager();
            const answer = emp.getRole();
            expect(answer).toEqual(expected);
        });
    });
});