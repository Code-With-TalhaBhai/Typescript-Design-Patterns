

abstract class MobileState {
    abstract state():void;
};


class vibration extends MobileState {
    
    state(): void {
        console.log("Mobile is vibrating");
    }
};

class silent extends MobileState {

    state(): void {
        console.log("Mobile is silent");
    }
};


class MobileStateAlert {
    private curr_state:MobileState;

    constructor(){
        this.curr_state = new vibration();
    }

    setState(state:MobileState):void{
        this.curr_state = state;
    }

    state():void{
        this.curr_state.state();
    }
};


const mobile = new MobileStateAlert();
mobile.state();
mobile.state();
console.log("State changing......");
mobile.setState(new silent());
mobile.state();
mobile.state();

console.log();
console.log('Counter program starting...');
console.log();



abstract class Counter{
    static count:number = 0;
}



class AddCount {
    constructor(){
        Counter.count++;
    }
};

class SubCount{
    constructor(){
        Counter.count--;
    }
};

class CounterHelper {
    constructor(){
        console.log("The total count of CountHelper is: ",Counter.count);
    }
}

console.log();
new CounterHelper();
new AddCount();
new AddCount();
new AddCount();
new CounterHelper();
new SubCount();
new SubCount();
new SubCount();
new CounterHelper();
console.log();



// Separate class
class CountDisplay2 {
    public static count:number = 1;


    addCount():void{
        CountDisplay2.count++;
    }

    display():void{
        console.log("The count is: ",CountDisplay2.count);
    }
};


const count_display = new CountDisplay2();
count_display.addCount();
count_display.addCount();
count_display.addCount();
count_display.addCount();

count_display.display();
const count_display2 = new CountDisplay2();
count_display2.addCount();
count_display.display();
