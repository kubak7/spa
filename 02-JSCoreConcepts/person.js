class Person{
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    get fullName(){
        return `${this.name} ${this.surname.toUpperCase()}`
    }
    get initials(){
        return `${this.name.charAt(0).toUpperCase()}.${this.surname.charAt(0).toUpperCase()}.`;

    }
}


const human = new Person("Jan","Nowak");
console.log(human.fullName);
console.log(human.initials);

const me = new Person("Jakub","Kozdra");
console.log(me.fullName);
console.log(me.initials);
