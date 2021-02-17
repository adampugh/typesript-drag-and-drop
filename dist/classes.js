"use strict";
class Dept {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployees() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDept extends Dept {
    constructor(id, admins) {
        super('IT', id);
        this.admins = admins;
    }
    describe() {
        console.log('hello');
    }
}
class AccountDept extends Dept {
    constructor(id, reports) {
        super(id, 'accounts');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('no report found');
    }
    static getInstance() {
        if (AccountDept.instance) {
            return this.instance;
        }
        this.instance = new AccountDept('dd44', ['blah', 'yes', 'no']);
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('please pass recent value');
        }
        console.log('hello');
        this.addReport(value);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    getReports() {
        console.log(this.reports);
    }
    describe() {
        console.log('this overrides deptments describe fn');
    }
}
const employee1 = Dept.createEmployee('boof lord');
console.log(employee1);
// const accounting = new AccountDept("dd44", ["blah", "yes", "no"]);
const itdept = new ITDept('123ddd', ['bob', 'guss']);
const accounting = AccountDept.getInstance();
console.log(itdept);
console.log(accounting);
// accounting.addReport("fart no no");
// accounting.getReports();
