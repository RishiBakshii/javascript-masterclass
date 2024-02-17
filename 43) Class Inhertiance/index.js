class Person{

    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    walk(){
        console.log('Person can walk');
    }
}

class Employee extends Person{
    constructor(name,age,profile){
        super(name,age)
        this.profile=profile;
    }

    Learn(){
        console.log('Employee can learn');
    }
}


const emp=new Employee('rishibakshi',19,'Full Stack Developer')
emp.walk()