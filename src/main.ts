/*variables*/

let hello = "world";
hello = "foo";

/*functions*/

const getFullName = (name:string, surname:string):string => {
    return name + " " + surname;
};
console.log(getFullName("Janhvi", "Rajpoot"));


/*functions in interfaces*/

interface Users {
    name:string;
    age?:number; 
    getMessage(): string;
}
const user1:Users = {
    name:"Janhvi",
    age:20,
    getMessage() {
        return "Hello" + name;
    }
};
const user2:Users = {
    name:"Krishna",
    getMessage() {
        return "Hello" + name;
    }
};

console.log(user1.getMessage());

/*union & types operation*/
type ID = string;        //types and interfaces are written with capital letters
type PopularTag = string;
type MaybePopularTag = PopularTag | null;

interface UserInterface{
    id:ID,
    name:string;
    surname:string;
}

const popularTags: PopularTag[] = ["dragon", "coffee"];
const dragonsTag: MaybePopularTag = "dragon";

let username:string = "alex";
let pageName:string | number = "1";
let errorMessage: string | null = null;

let user: UserInterface | null =null;

/*'void' in typescript*/
const doSomething = (): void => {
    console.log("doSomething"); //When we don't return anything it's void
}

/* 'any' in typescript:turns off typescript checks*/
let foo: any = "foo"; 
console.log(foo.bar());

// {NOTE: use of "any" should be 
//       be reduced or not used 
//       at all, it causes bigger problems.}



/*'never' in typescript:Function with never can't be executed to the end.*/
const doNothing = (): never =>{
    throw "never";
};

/*'unknown' type in typescript:can't be assigned directly in other types.*/
let vAny:any = 10;
let vUnknown: unknown = 10;

let s1: string = vAny; //cannot write: let s2:string = vUnknown;

console.log(vAny.foo());
// console.log(vUnknown.foo()); --> returns error

/*Type assertion :  converting one type to another.*/
let s2:string = vUnknown as string;

let pageNumber:string = "1";
let numericPageNumber: number = (pageNumber as unknown) as number;


/* WORKING WITH DOM */

const someElement = document.querySelector(".foo");

someElement.addEventListener('blur',(event)=>{
    const target = event.target as HTMLInputElement
    console.log('event', target.value);
});

/* CLASSES IN TYPESCRIPT */
interface UserInterface {
    getFullname(): string;
}

class User implements UserInterface{
    firstName: string;
    lastName: string;
    readonly unchangeableName: string;
    static readonly maxAge = 50;

    constructor(firstName:string, lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangeableName = firstName;
    }
    id: string;
    name: string;
    surname: string;

    changeUnchangeableName(): void {
        // this.unchangeableName = "foo";
    }

    getFullname(): string {
        return this.firstName+ " "+this.lastName;
    }
}

//inheritance
class Admin extends User {
    private editor:string

    setEditor(editor: string): void {
        this.editor = editor
    }

    getEditor(): string {
        return this.editor
    }
}

const newuser = new User("Janhvi", "Rajpoot");
console.log(newuser.getFullname); 
console.log(User.maxAge);

const admin = new Admin('shark','tank')
console.log(admin.firstName);

/* GENERICS IN TYPESCRIPT */
const addId = <T extends object>(obj: T) => {    //Big "T"  is a default name for generic.
    const id = Math.random().toString(16);
    return {
        ...obj,
        id,
    };
};

interface UserInterface2 {
    name: string;
}

const user5: UserInterface2 = {
    name:"Jack",
};

const result = addId<UserInterface2>(user5);
console.log("result", result);

/* ENUMS IN TYPESCRIPT */
const statuses = {
    notStarted: 0,
    inProgress: 1,
    done: 2,
};

//this can be wriiten with the help of 'enum'.

console.log(statuses.inProgress);

enum Status {
    NotStarted = "notStarted", //values in enum are assigned using '=' sign.
    InProgress = "inProgress",
    Done = "done",
}

// using enums inside interfaces 

interface Task {
    id: string;
    status: Status;
}

let notStartedStatus: Status = Status.NotStarted;

notStartedStatus = Status.Done;

console.log(Status.InProgress);

//only difference is enum can be used as a value and a data type.