const init = () => {
  return
  class Class1 {
    constructor() {
      this.name = 'Name'
    }

    getName() {
      return this.name
    }
  }

  class Class2 extends Class1 {
    constructor() {
      super()
      this.name = 'Bob'
    }

    print() {
      console.log(super.getName() + '111')
    }
  }

  const instance = new Class2()
  instance.print()

  return
  // Parent constructor function
  function Animal(name) {
    this.name = name
  }

  // Method for Animal prototype
  Animal.prototype.speak = function () {
    console.log(this.name + ' makes a noise.')
  }

  Animal.prototype.somemethod = function () {
    console.log(this.name + ' somemethod')
  }

  // Child constructor function inheriting from Animal
  function Dog(name) {
    Animal.call(this, name) // call the parent constructor
  }

  // Inherit Animal prototype
  Dog.prototype = Object.create(Animal.prototype)
  // Obj.prototype.constructor is the constructor data property
  // of an Object instance returns a reference to the constructor
  // function that created the instance object.
  Dog.prototype.constructor = Dog

  console.log(Dog.prototype.constructor)

  // Method for Dog prototype
  Dog.prototype.speak = function () {
    console.log(this.name + ' barks.')
  }

  // Creating instances
  var dog = new Dog('Spot')
  dog.somemethod() // Output: Spot barks.

  return
  var p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'one')
  })
  var p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'two')
  })
  var p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'three')
  })
  var p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, 'four')
  })
  var p5 = new Promise((resolve, reject) => {
    reject('reject')
  })

  Promise.all([p1, p2, p3, p4, p5]).then(
    (value) => {
      console.log(value)
    },
    (reason) => {
      console.log(reason)
    },
  )
  return
  let b = { a: 1 }
  let f = b

  f.a = 11

  console.log(b.a === f.a)

  let a = 1
  a.toString()

  console.log(typeof a == 'number')

  const user = {
    _name: 'Name',
    getName() {
      return function () {
        console.log(this)
        return this._name
      }
    },
  }

  console.log(user.getName().apply(user))

  return
  class MyClass {
    constructor(name) {
      this.name = name
    }

    static print() {
      console.log(111)
    }

    sayHello() {
      console.log(`Hello, my name is ${this.name}`)
    }
  }

  const obj = new MyClass('Alice')
  obj.sayHello()
  MyClass.print()

  return
  /*function parallel(functions, doneAll) {
    // Map each function to a new Promise
    const promises = functions.map(
      (func) =>
        new Promise((resolve) => {
          func(resolve)
        }),
    )

    // Use Promise.all to execute all promises in parallel
    Promise.all(promises).then((results) => {
      doneAll(results)
    })
  }

  const a = function (done) {
    setTimeout(function () {
      done('result a')
    }, 300)
  }

  const b = function (done) {
    setTimeout(function () {
      done('result b')
    }, 200)
  }

  parallel([a, b], function (results) {
    console.log(results) // ['result a', 'result b']
  })*/
}

export { init }
