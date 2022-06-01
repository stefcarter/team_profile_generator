const Employee = require('../lib/Employee.js');

describe("Employee", () => {
    describe("constructor", () => {
        it("should provide the employee's name, id number and email address when arguments are passed.", () => {
            const name = "Carter";
            const id = 111;
            const email = "carter@fake.com";
            const emp = new Employee(name, id, email);
            expect(emp.name).toEqual(name);
            expect(emp.id).toEqual(id);
            expect(emp.email).toEqual(email);
        });
    });

    descirbe("getName", () => {
        it("should return the value of the 'name' parameter", () => {
            const name = "Carter";
            const id = 111;
            const email = "carter@fake.com";
            const expected = "Carter";
            const emp = new Employee(name, id, email);
            const answer = emp.getName();
            expect(asnwer).toEqual(expected);
        });
    });

    describe("getId", () => {
        it("should return the value of the 'id' parameter", () => {
            const name = "Carter";
            const id = 111;
            const email = "carter@fake.com";
            const expected = 111;
            const emp = new Employee(name, id, email);
            const answer = emp.getId();
            expect(answer).toEqual(expected);
        });
    });

    describe("getEmail", () => {
        it("should return the value of the 'email' parameter", () => {
            const name = "Carter";
            const id = 111;
            const email = "carter@fake.com";
            const expected = "carter@fake.com";
            const emp = new Employee(name, id, email);
            const answer = emp.getEmail();
            expect(answer).toEqual(expected);
        });
    });

    describe("getRole", () => {
        it("should return the value of the employee's role", () => {
            const expected = "Employee";
            const emp = new Employee();
            const answer = emp.getRole();
            expect(answer).toEqual(expected);
        });
    });
});