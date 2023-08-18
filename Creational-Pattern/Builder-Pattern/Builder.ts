

class User {
    public name:string;
    public age:number = 0;
    constructor(name:string){
        this.name = name;
    }
}



class UserBuilder {
    public user:User;

    constructor(name:string){
        this.user = new User(name);
    };

    setAge(age:number){
        this.user.age = age;
        return this;
    }

    build(){
        return this.user;
    }
};


const builder = new UserBuilder('mars').setAge(53).build();