/*variables*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var hello = "world";
hello = "foo";
/*functions*/
var getFullName = function (name, surname) {
    return name + " " + surname;
};
console.log(getFullName("Janhvi", "Rajpoot"));
var user1 = {
    name: "Janhvi",
    age: 20,
    getMessage: function () {
        return "Hello" + name;
    }
};
var user2 = {
    name: "Krishna",
    getMessage: function () {
        return "Hello" + name;
    }
};
console.log(user1.getMessage());
var popularTags = ["dragon", "coffee"];
var dragonsTag = "dragon";
var username = "alex";
var pageName = "1";
var errorMessage = null;
var user = null;
/*'void' in typescript*/
var doSomething = function () {
    console.log("doSomething"); //When we don't return anything it's void
};
/* 'any' in typescript:turns off typescript checks*/
var foo = "foo";
console.log(foo.bar());
// {NOTE: use of "any" should be 
//       be reduced or not used 
//       at all, it causes bigger problems.}
/*'never' in typescript:Function with never can't be executed to the end.*/
var doNothing = function () {
    throw "never";
};
/*'unknown' type in typescript:can't be assigned directly in other types.*/
var vAny = 10;
var vUnknown = 10;
var s1 = vAny; //cannot write: let s2:string = vUnknown;
console.log(vAny.foo());
// console.log(vUnknown.foo()); --> returns error
/*Type assertion :  converting one type to another.*/
var s2 = vUnknown;
var pageNumber = "1";
var numericPageNumber = pageNumber;
/* WORKING WITH DOM */
var someElement = document.querySelector(".foo");
someElement.addEventListener('blur', function (event) {
    var target = event.target;
    console.log('event', target.value);
});
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangeableName = firstName;
    }
    User.prototype.changeUnchangeableName = function () {
        // this.unchangeableName = "foo";
    };
    User.prototype.getFullname = function () {
        return this.firstName + " " + this.lastName;
    };
    User.maxAge = 50;
    return User;
}());
//inheritance
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(User));
var newuser = new User("Janhvi", "Rajpoot");
console.log(newuser.getFullname);
console.log(User.maxAge);
var admin = new Admin('shark', 'tank');
console.log(admin.firstName);
/* GENERICS IN TYPESCRIPT */
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var user5 = {
    name: "Jack",
};
var result = addId(user5);
console.log("result", result);
/* ENUMS IN TYPESCRIPT */
var statuses = {
    notStarted: 0,
    inProgress: 1,
    done: 2,
};
//this can be wriiten with the help of 'enum'.
console.log(statuses.inProgress);
var Status;
(function (Status) {
    Status["NotStarted"] = "notStarted";
    Status["InProgress"] = "inProgress";
    Status["Done"] = "done";
})(Status || (Status = {}));
var notStartedStatus = Status.NotStarted;
notStartedStatus = Status.Done;
console.log(Status.InProgress);
//only difference is enum can be used as a value and a data type.
