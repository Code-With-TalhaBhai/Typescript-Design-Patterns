// A composite design is a type of pattern  in which we have leafs and composite node //


interface Employee {
    show_details():void;
};

enum skill_level {
    E,
    M,
    H
}

// Leaf
class Developer implements Employee{
    private name:string;
    private salary:number;
    private skill_level:skill_level;
    private Designation:string;

    constructor(name:string,salary:number,skill_level:skill_level,Designation:string){
        this.name = name;
        this.salary = salary;
        this.skill_level = skill_level;
        this.Designation = Designation;
    }

    show_details(): void {
        console.log("The name of employee is: ",this.name);
        console.log("The Designation is: ",this.Designation);
        console.log("The salary is: ",this.salary);
        console.log("The skill-level of employee is: ",this.skill_level);
    }
}


// Leaf
class Marketer implements Employee{
    private name:string;
    private salary:number;
    private skill_level:skill_level;
    private Designation:string;

    constructor(name:string,salary:number,skill_level:skill_level,
        Designation:string){
        this.name = name;
        this.salary = salary;
        this.skill_level = skill_level;
        this.Designation = Designation;
    }

    show_details(): void {
        console.log("The name of employee is: ",this.name);
        console.log("The Designation is: ",this.Designation);
        console.log("The salary is: ",this.salary);
        console.log("The skill-level of employee is: ",this.skill_level);
    }
}


// Composite
class Manager implements Employee {
    public EmployeeList:Employee[] = [];

    show_details():void{
        this.EmployeeList.forEach(val=>{
            console.log(val);
        })
    }

    addEmployee(emp:Employee):void{
        this.EmployeeList.push(emp);
    }
}



// Client Code
const developer1 = new Developer("TAlha",43275433,skill_level.H,"Senior Developer");
const developer2 = new Developer("Aryaan",235000,skill_level.E,"Entry Developer");

const Project_Manger = new Manager();
Project_Manger.addEmployee(developer1);
Project_Manger.addEmployee(developer2);

Project_Manger.show_details();
console.log();



const marketer1 = new Marketer("John",523234,skill_level.M,'Digital Marketer');
const marketer2 = new Marketer("Bob",32134,skill_level.E,'Technical Writer');

const Marketing_Manager = new Manager();
Marketing_Manager.addEmployee(marketer1);
Marketing_Manager.addEmployee(marketer2);

Marketing_Manager.show_details();
