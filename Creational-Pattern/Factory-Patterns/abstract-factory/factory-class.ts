// Factory Design pattern is a type of design pattern in which we create methods or properties in parent,abstract class or interface and each subclass has its own implementation according to the requirement

// Run this program by script (npx ts-node factory-class);


import {abstract_logger, Ilogger} from './factory-types';

class logger1 extends abstract_logger {
    public amount:number = 234;

    info(){
        console.log("This is information from logger 1");
    }
    error(){
        console.log("This is error from logger 1");
    }

};


class logger2 extends abstract_logger {
    public name:string = "talha";

    info(){
        console.log("This is info from logger 2");
    }
    error(){
        console.log("This is err from logger 2");
    }
};

// we can also do by interface
class logger3 implements Ilogger {
    info(){
        console.log("This is info from logger 3 from interface");
    }
    error(){
        console.log("This is err from logger 3 from interface");
    }
}



const log1 = new logger1(43);
log1.info();
log1.error();
log1.display();

console.log();
console.log("Every subclass has its own implementation");
console.log();

const log2 = new logger2(3);
log2.info();
log2.error();
log2.display();

console.log();
console.log("This subclass implements through INTERFACE");
console.log();

const log3 = new logger3();
log3.info();
log3.error();