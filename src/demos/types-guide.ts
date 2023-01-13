/* eslint-disable @typescript-eslint/no-unused-vars */
// Implicit types

let firstName = 'John';
let count = 10;
let isPresent = true;
let words = ['apple', 'aardvark', 'asymptote'];

let personUntyped = {
  firstName: 'John',
  lastName: 'Paxton',
};

// Explicit types
// primitives: string, number, boolean

// functional types
type MathFunction = (operand1: number, operand2: number) => number;

let add: MathFunction = (a, b) => a + b;

// function(arg1: type, arg2: type...): returnValueType { ... }
let subtract = (a: number, b: number): number => a - b;

let str1 = 'the quick brown fox....';
str1.indexOf('q');

// in-line types
let personInline: { firstName: string; lastName: string; isPresent?: boolean } = {
  firstName: 'John',
  lastName: 'Paxton',
};

// Type definitions
// Types are checked at compile time (usually not in the browser) and then erased if possible

// Interfaces and types do not generate JavaScript code
// Classes and enums __DO__ generate JavaScript code

// Interface
interface IPerson {
  firstName: string;
  age: number;
}

// Type
type PersonType = {
  firstName: string;
  age: number;
};

// Class
class PersonClass {
  public firstName: string;
  public age: number;

  constructor(firstName: string, age: number) {
    this.firstName = firstName;
    this.age = age;
  }
}

class PersonInitialized {
  public firstName = '';
  public age = 0;
}

// Enum

// eslint-disable-next-line @typescript-eslint/comma-dangle
enum Days {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

// Extending types
// Interface/class with extends
interface IEmployee extends IPerson {
  employeeId: number;
}

class EmployeeClass extends PersonClass {
  public employeeId = 0;
}

// Union types
// Use with optional types

type Direction = 'North' | 'South';
type ShoeSize = string | number;

// Intersection types
type MusicPlayer = {
  play: () => void;
  pause: () => void;
};

type Phone = {
  dial: () => void;
  call: (name: string) => void;
};

type MobilePhone = Phone & MusicPlayer;

// Extending types
// Type with union or intersection operators

// Extending via intersection
type Shippable = {
  weight: number;
  destination: string;
};

type Book = {
  author: string;
  title: string;
};

type ShippableBook = Book & Shippable;

// Extending via union
type Dog = {
  friendly: boolean;
};

type Fish = {
  aquatic: boolean;
};

type Pet = Dog | Fish;

// Extensible types (interfaces or types)

interface IExtensibleCar {
  make: string;
  model: string;
  vin: number;
  isSportsCar: boolean;

  // Additional properties whose keys are strings and whose values are strings or numbers;
  [a: string]: string | number | boolean;
  // make, model, vin, isSportsCar, *
}

let honda: IExtensibleCar = {
  make: 'Honda',
  model: 'Civic',
  vin: 12345,
  isSportsCar: false,
  color: 'red',
  year: 2022,
  numberOfWheels: 2,
  needsMainenance: true,
  // Add other properties as you see fit
};

type ExtensibleCarType = {
  make: string;
  model: string;
  // vin: number;
  [key: string]: string;
};

type ExtensibleWhatever = {
  foo: string;
  [key: number]: string;
};

// Utilities
// keyof
type KCar = {
  make: string;
  model: string;
  year: number;
  color: string;
};

type KCarProps = keyof KCar; // 'make' | 'model' | 'year' | 'color'

// typeof
let myHonda = {
  make: 'Honda',
  model: 'Civic',
};

type HondaType = typeof myHonda;
let myFord: HondaType = {
  make: 'Ford',
  model: 'Mustang',
};
/*
type HondaType = {
  make: string;
  model: string;
}
*/

// Pick / Omit
type MakeModel = Pick<KCar, 'make' | 'model'>;

type ForgetTheColor = Omit<KCar, 'color'>;

// Partial / Required

// Every property from Book, add any or all of the properties from Shippable
type OptionalShippableBook = Book & Partial<Shippable>;

// Readonly

type ReadOnlyCar = Readonly<KCar>;

// Generics

interface LockedTypeStack {
  push: (val: string) => void;
  pop: () => string;
  values: string[];
}

interface GenericStack<T> {
  push: (val: T) => void;
  pop: () => T | undefined;
  values: T[];
}

let numberStack: GenericStack<number> = {
  values: [],
  push: function (x) {
    this.values.push(x);
  },
  pop: function () {
    return this.values.pop();
  },
};

export {};
