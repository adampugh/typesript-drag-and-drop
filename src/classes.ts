abstract class Dept {
    private employees: string[] = [];

    constructor(private name: string, private readonly id: string) {}

    static createEmployee(name: string) {
        return { name };
    }

    abstract describe(this: Dept): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployees() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDept extends Dept {
    constructor(id: string, public admins: string[]) {
        super('IT', id);
    }

    describe() {
        console.log('hello');
    }
}

class AccountDept extends Dept {
    private lastReport: string;
    private static instance: AccountDept;

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

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('please pass recent value');
        }
        console.log('hello');
        this.addReport(value);
    }

    private constructor(id: string, private reports: string[]) {
        super(id, 'accounts');
        this.lastReport = reports[0];
    }

    addReport(text: string) {
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
