// function doubleNumbers(arr) {
//   // your code here
//   return arr.map((item) => item * 2);
// }
// console.log(doubleNumbers([2, 5, 100]));

// function stringItUp(arr) {
//   // your code here
//   return arr.map((item) => item + "");
// }
// console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// function capitalizeNames(arr) {
//   return arr.map((item) => {
//     let firstLater = item[0].toUpperCase();
//     let j = firstLater + item.toLowerCase().substring(1);
//     return j;
//   });
// }

// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

// function namesOnly(arr) {
//   // your code here
//   return arr.map((item) => item.name);
// }

// console.log(
//   namesOnly([
//     {
//       name: "Angelina Jolie",
//       age: 80,
//     },
//     {
//       name: "Eric Jones",
//       age: 2,
//     },
//     {
//       name: "Paris Hilton",
//       age: 5,
//     },
//     {
//       name: "Kayne West",
//       age: 16,
//     },
//     {
//       name: "Bob Ziroll",
//       age: 100,
//     },
//   ])
// );

// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"];

// function makeStrings(arr) {
//   // your code here
//   return arr.map((item) => {
//     return item.name < 18
//       ? item.name + " can go to The Matrix"
//       : item.name + " is under age!!";
//   });
// }

// console.log(
//   makeStrings([
//     {
//       name: "Angelina Jolie",
//       age: 80,
//     },
//     {
//       name: "Eric Jones",
//       age: 2,
//     },
//     {
//       name: "Paris Hilton",
//       age: 5,
//     },
//     {
//       name: "Kayne West",
//       age: 16,
//     },
//     {
//       name: "Bob Ziroll",
//       age: 100,
//     },
//   ])
// );

// [
//   "Angelina Jolie can go to The Matrix",
//   "Eric Jones is under age!!",
//   "Paris Hilton is under age!!",
//   "Kayne West is under age!!",
//   "Bob Ziroll can go to The Matrix",
// ];

// under age means not 18 +;

// function makeStrings(arr) {
//   // your code here
//   let sum = 0;
//   return arr.reduce((curr, item) => {
//     if (item > 0) {
//       curr += item;
//       return curr;
//     } else {
//       return curr;
//     }
//   }, 0);
// }
// console.log(makeStrings([1, -4, 12, 0, -3, 29, -150]));

// const input7 = [
//   {
//     name: "John",
//     age: 13,
//   },
//   {
//     name: "Mark",
//     age: 56,
//   },
//   {
//     name: "Rachel",
//     age: 45,
//   },
//   {
//     name: "Nate",
//     age: 67,
//   },
//   {
//     name: "Jeniffer",
//     age: 65,
//   },
// ];
// function foo(arr) {
//   let max = 0;
//   let newArr = [];
//   let min = arr[0].age;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].age > max) max = arr[i].age;
//     if (arr[i].age < min) min = arr[i].age;
//   }
//   let difference = max - min;
//   newArr.push(max, min, difference);
//   return newArr;
// }
// console.log(foo(input7));

// const input8 = [
//   ["a", "b", "c"],
//   ["c", "d", "f"],
//   ["d", "f", "g"],
// ];
// function glob() {
//   let newArr = [];
//   return function foo(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       if (!Array.isArray(arr[i])) newArr.push(arr[i]);
//       else foo(arr[i]);
//     }
//     console.log(newArr);
//     return newArr.reduce((curr, item) => {
//       if (curr[item]) {
//         curr[item] = curr[item] + 1;
//       } else curr[item] = 1;
//       return curr;
//     }, {});
//   };
// }

// console.log(glob()(input8));

// 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12
// const arrOfObjects = [
//   {
//     name: "sarah",
//     age: 32,
//     phoneNumber: "+374000000",
//     relation: "nelly",
//   },
//   {
//     name: "nelly",
//     age: 11,
//     phoneNumber: "+3750020000",
//     relation: "sarah",
//   },
// ];

// const referancetoSarahObject = arrOfObjects[0];
// const referanceToNellyObject = arrOfObjects[1];

// const country = (phoneNumber) => {
//   switch (true) {
//     case phoneNumber == "+374": {
//       return "Armenia";
//     }
//     case phoneNumber == "+375": {
//       return "Somali";
//     }
//     case phoneNumber == "+376": {
//       return "Russia";
//     }
//     case phoneNumber == "+377": {
//       return "Hoktemberyan";
//     }
//     default:
//       "antsanot erkir";
//   }
// };

// function foo(arr) {
//   let arrOfObjects2 = [];
//   return arr.reduce((curr, item) => {
//     let skzbitver = item.phoneNumber.substring(0, 4);
//     curr.name = item.name.toUpperCase();
//     curr.age = item.age;
//     curr.phoneNumber = item.phoneNumber;
//     curr.country = country(skzbitver);
//     curr.relation = referancetoSarahObject;
//     arrOfObjects2.push(curr);
//     return arrOfObjects2;
//   }, {});
// }
// console.log(foo(arrOfObjects));

//  11 11 11 11 11 11 11 11 11 11 11 11 11 11
// function foo(s, words) {
//   let str = "";
//   for (let i = 0; i < words.length; i++) {
//     str += words[i];
//     if (str === s) return true;
//   }
//   return false;
// }
// console.log(foo("iloveleetcode", ["i", "love", "leetcode", "apples"]));

// function User(name, surname) {
//   this.name = name;
//   this.surname = surname;
// }
// let user = new User("Artur", "Simonyan");
// console.log(user);

// function User2(name, surname) {
//   if (new.target) {
//     /* stugum enq ete userin new-ov kanchats chlini  new ov kanchi*/
//     this.name = name;
//     this.surname = surname;
//   } else {
//     return new User2(name, surname);
//   }
// }

// Array.prototype.myToString = function () {
//   let arr = this;
//   let str = "";
//   for (let i = 0; i < arr.length; i++) {
//     str += arr[i];
//   }
//   return str;
// };

// let arr = [2, 4, 5, 6, 7];
// console.log(arr.myToString());

//  12 12 12 12 12 12 12 12 12 12 12

// const arrOfObjects = [
//   {
//     name: "sarah",
//     age: 32,
//     phoneNumber: "+374000000",
//     relation: "nelly",
//   },
//   {
//     name: "nelly",
//     age: 11,
//     phoneNumber: "+3750020000",
//     relation: "sarah",
//   },
// ];

// const referancetoSarahObject = arrOfObjects[0];
// const referanceToNellyObject = arrOfObjects[1];

// const country = (phoneNumber) => {
//   switch (true) {
//     case phoneNumber == "+374": {
//       return "Armenia";
//     }
//     case phoneNumber == "+375": {
//       return "Somali";
//     }
//     case phoneNumber == "+376": {
//       return "Russia";
//     }
//     case phoneNumber == "+377": {
//       return "Hoktemberyan";
//     }
//     default:
//       "antsanot erkir";
//   }
// };

// function foo(arr) {
//   arr.forEach((element) => {
//     element.name = element.name.toUpperCase();
//     element.country = country(element.phoneNumber.substring(0, 4));
//   });
//   return arr;
// }
// console.log(foo(arrOfObjects));

//  9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9

// function foo(arr) {
//   let p = arr.length / 2;
//   let str = "";
//   let obj = arr.reduce((curr, item) => {
//     if (curr[item]) curr[item] = curr[item] + 1;
//     else curr[item] = 1;
//     return curr;
//   }, {});
//   for (let key in obj) {
//     if (obj[key] >= p) str += key += " ";
//   }
//   return str;
// }
// console.log(foo([2, 2, 1, 1, 1, 2, 2]));

//  10 10 10 10 10 10 10 10 10 10

// function foo(arr) {
//   let obj = arr.reduce((curr, item) => {
//     if (curr[item]) curr[item] = curr[item] + 1;
//     else curr[item] = 1;
//     return curr;
//   }, {});
//   let array = Object.entries(obj);
//   array.sort((a, b) => b[1] - a[1]);
//   return array[2][0];
// }
// console.log(foo([2, 2, 1, 1, 1, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3]));

// const toyota1 = {
//   model: "Toyota",
//   type: "Camry",
//   logModel() {
//     console.log(this.model, this.type);
//   },
// };

// 111111111111111111111111111111111111111111111111111111111

// const toyota2 = {
//   model: "Toyota",
//   type: "Rav4",
// };
// toyota1.logModel.bind(toyota2)();
// toyota1.logModel.call(toyota2);

//  222222222222222222222222222222222222222222222222222222

// const flights = {
//   flights: [],

//   priorityFlights: [],

//   scheduleFlight(flight) {
//     this.flights.push(flight);
//   },

//   removeFlight(flight) {
//     this.flights = this.flights.filter(flightFilter.bind(this));
//     function flightFilter(f) {
//       if (flight === f) {
//         return this.priorityFlights.includes(flight);
//       }
//       return true;
//     }
//   },

//   makePriorityFlight(flight) {
//     this.priorityFlights.push(flight);
//   },
// };

// flights.scheduleFlight("1");

// flights.makePriorityFlight("1");

// flights.removeFlight("1");

// console.log(flights.flights);

// 3333333333333333333333333333333333333333333333

// function sum(n) {
//   return function (m) {
//     return n + m;
//   };
// }
// console.log(sum(10)(3));

// function CarConstructor(model, year) {
//   if (new.target) {
//     this.model = model;
//     this.year = year;
//   } else {
//     return new CarConstructor(model, year);
//   }
// }
// console.log(new CarConstructor("BMW", 2018));

//  4444444444444444444444444444444444444444444444444444444444444

// const objArr = [{ name: "1" }, { name: "2" }, { name: "3" }, { name: "4" }];

// function logName() {
//   console.log(this.name);
// }

// let x = objArr.map((el) => {
//   el.logName = logName;
//   return el;
// });
// console.log(x);

// let arrr = [...objArr];
// arrr.map((el) => (el.logName = logName));
// console.log(arrr);

//  55555555555555555555555555555555555555555555555555

// const arrayOfObjectNames = [{ name: "1" }, { name: "2" }, { name: "3" }];

// function logArrayObjectNames() {
//   console.log(this.name);
// }
// arrayOfObjectNames.forEach((element) => {
//   logArrayObjectNames.call(element);
// });

// 666666666666666666666666666666666666666666666

// const mappedFunc = arrayOfObjectNames.map((item) => {
//   // write your logic here
//   return function name() {
//     return item.name;
//   };
// });
// console.log(mappedFunc);

// mappedFunc.forEach((i) => console.log(i()));

// 77777777777777777777777777777777777777777777777777777777777777777

// function CreateCar(id, model, year, color, driveTrain) {
//   // please implement CreateCar function so it creates cars with properties
//   this.id = id; // id : ,
//   this.model = model; // model: ,
//   this.year = year; // year: ,
//   this.color = color; // color: ,
//   this.driveTrain = driveTrain; // driveTrain: ,
// }

// please take a look at the the inventory object and implement the missing methods

// const inventory = {
//   cars: [],

//   addCar(car) {
//     // addCar function would add a car to the cars array
//     // please implement it here
//     this.cars.push(car);
//   },

//   removeCar(id) {
//     // removeCar function would remove a car from cars array
//     // please implement it here
//     this.cars.forEach((item, i) => {
//       item.id === id && this.cars.splice(i, 1);
//     });
//   },

//   listCars() {
//     // listCars function would list all the cars
//     // you simply need to log all the cars
//     return this.cars;
//   },

//   listCarsByConditionCallback(conditionCallback) {
//     // this function should accept a parameter conditionCallback, which is a function,
//     // the conditionCallback would be called on every car with that car passed to conditionCallback
//     // if conditionCallback returns true then the car is logged into console.
//     // please implement it
//     // console.log(conditionCallback);
//     this.cars.forEach((car) => {
//       if (conditionCallback(car)) {
//         console.log("CAR>>", car);
//       }
//     });
//   },
// };

// inventory.addCar(new CreateCar(1, "Toyota", "1996", "red", "4x4"));
// inventory.addCar(
//   new CreateCar(2, "Mercedes", "2000", "white", "rear wheel drive")
// );
// inventory.addCar(new CreateCar(3, "BMW", "2020", "black", "rear wheel drive"));
// inventory.removeCar(2);
// // console.log(inventory.cars);

// inventory.listCars();
// inventory.listCarsByConditionCallback(
//   (car) => car.model === "BMW" && car.year === "2020"
// );

// function Song(title, artist) {
//   this.title = title;
//   this.artist = artist;
//   this.play = function play() {
//     return this.artist;
//   };
// }

// let obj = new Song("XentAghjik", "Forsh");
// console.log(obj.play());

// 9)

// 1. Create a folder called Workshop_4 make a git repository inside.
//
// 2. without navigating to a different branch create a branch named x_branch

//  1 =>  {
// 1.1 =>  mkdir Workshop_4
// 1.2 => cd Workshop_4
// 1.3 => git init

// }

// 2 => {
// git branch x_branch

// }

// 10)
// 1. Make a new folder called 'Workshop_4'

// 2. make that folder into git repo

// 2. create a branch called rename_me

// 3. create a branch called delete_me

// 4. rename the branch rename_me to renamed_branch

// 5. delete the branch delete_me

// 1 => cd Workshop_4
// 2 => git init
// git commit --allow-empty -m "Empty-Commit"
//  3 => git branch rename_me
//  4 => git branch delete_me
// 5 => git branch --move  rename_me renamed_branch-branch-name
// 6 => git branch --delete delete_me

// const checkKnow = {
//   surname: "surname",
//   name: "checkKnow",
//   foo: {
//     name: "foo",
//     logName() {
//       console.log(this.surname);
//     },
//   },
//   boo() {
//     const obj = {
//       name: "boo method",
//       check: () => {
//         console.log(this.name);
//       },
//     };
//     obj.check();
//   },
// };

// checkKnow.foo.logName();

// checkKnow.boo();

// with a few words explain why this is happening Armenian or English.

// checkKnow.foo.logName();  tpum e undefined vorovhetev logName functian function declaretion e
//  isk ayd functianery irenc this y yndunum en irenic verev scopi thisy (functiayi kam objecti)
//  irenic verev thisy foo n e   foo i mej surname chka. isk thisi bacakayutyuny veradardznum e undefined

//  checkKnow.boo(); =>  tpum e 'checkKnow' vorovhetev checkNow objecti mijic kanchvum e boo()
//  functian  boo i mej ka object vory uni name ev functia.  boo functiai marmnum kanchvum e ir miji objecti
//  check functian.    check functian handisanum e arrow function.   arrow functianery chen janachum
// objecti scop, nranq pntrum en irenic verev functiai thisy. ays paragayum check y yndunum e boo i
//  this y   isk boo i this.name  = checkKnow

//

const employees = [
  {
    firstName: "Arabela",
    lastName: "Fockes",
    email: "afockes0@wired.com",
    salary: "$6.18",
    isEngineer: true,
    gender: "Female",
  },
  {
    firstName: "Bryant",
    lastName: "Marchi",
    email: "bmarchi1@theatlantic.com",
    salary: "$8.05",
    isEngineer: false,
    gender: "Male",
  },
  {
    firstName: "Batholomew",
    lastName: "Eim",
    email: "beim2@goodreads.com",
    salary: "$7.26",
    isEngineer: true,
    gender: "Male",
  },
  {
    firstName: "Ritchie",
    lastName: "Ferreira",
    email: "rferreira3@booking.com",
    salary: "$4.07",
    isEngineer: true,
    gender: "Male",
  },
  {
    firstName: "Kaylyn",
    lastName: "Ivain",
    email: "kivain4@gmpg.org",
    salary: "$5.89",
    isEngineer: false,
    gender: "Female",
  },
  {
    firstName: "Wilhelmina",
    lastName: "Portigall",
    email: "wportigall5@plala.or.jp",
    salary: "$2.06",
    isEngineer: false,
    gender: "Female",
  },
  {
    firstName: "Rouvin",
    lastName: "Gillcrist",
    email: "rgillcrist6@aol.com",
    salary: "$7.29",
    isEngineer: true,
    gender: "Male",
  },
  {
    firstName: "Flemming",
    lastName: "Scroggins",
    email: "fscroggins7@msu.edu",
    salary: "$7.54",
    isEngineer: false,
    gender: "Male",
  },
  {
    firstName: "Sallee",
    lastName: "Schlagh",
    email: "sschlagh8@reuters.com",
    salary: "$2.24",
    isEngineer: false,
    gender: "Female",
  },
  {
    firstName: "Roxine",
    lastName: "Bedo",
    email: "rbedo9@whitehouse.gov",
    salary: "$6.47",
    isEngineer: false,
    gender: "Female",
  },
];

// function recivingString(arr) {
//   return arr
//     .map((el) => {
//       return el.firstName + " " + el.lastName;
//     })
//     .toString();
// }
// console.log(recivingString(employees));

// function recivingString(arr) {
//   return arr
//     .map((el) => {
//       return el.email + ": " + el.salary;
//     })
//     .toString();
// }
// console.log(recivingString(employees));

// 3333333333333333333

// Array.prototype.myToString = function () {
//   let arr = this;
//   let str = "";
//   for (let i = 0; i < arr.length; i++) {
//     str += arr[i] + ",";
//   }
//   return str;
// };
// console.log(employees.myToString());

// function returnString(arr) {
//   return arr
//     .map((el) => {
//       return el.email;
//     })
//     .join("//");
// }
// console.log(returnString(employees));

// function returnString(arr) {
//   return arr
//     .map((el) => {
//       return el.email + ": " + el.salary;
//     })
//     .join(",");
// }
// console.log(returnString(employees));

// Array.prototype.myJoin = function (argument = ",") {
//   let str = "";
//   let arr = this;
//   for (let i = 0; i < arr.length; i++) {
//     if (
//       typeof arr[i] === "undefined" ||
//       Array.isArray(arr[i]) ||
//       arr[i] === null
//     ) {
//       str += argument;
//       continue;
//     }
//     str += arr[i];
//     if (i !== arr.length - 1) {
//       str += argument;
//     }
//   }
//   return str;
// };
// let arr = [1, 2, 5, 7, 9, undefined, [], null, 4];
// console.log(arr.myJoin());
// console.log(arr.join("-"));
