class Person {
    constructor(name, age, nickname){
        
        this.name = name,
        this.age = age,
        this.nickname = nickname

    }
}


const bob = new Person('Bob', 10, 'Bobby')

const myVariable = $('#myID')

const par = document.createElement('p')
//myVariable.append(document.createElement('p').innerHTML = 'Hello')

par.append('Hello')
myVariable.append(par)

console.log(myVariable)
console.log(bob)





