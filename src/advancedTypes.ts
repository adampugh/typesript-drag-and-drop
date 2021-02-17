type Admin = {
    name: string;
    priv: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'bob',
    priv: ['create'],
    startDate: new Date(),
};

interface ErrorContainer {
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email',
};

type Combinable = string | number;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const fetchedUserData = {
    id: 'u123',
    name: 'bob',
    job: { title: 'CEO', description: 'big boss' },
};

console.log(fetchedUserData?.job?.title);
