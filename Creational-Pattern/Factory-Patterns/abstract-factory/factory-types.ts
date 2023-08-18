
export interface Ilogger {
    info(): void;
    error(): void;
};

export abstract class abstract_logger {
    public num:number;
    constructor(num:number){
        this.num = num;
    }

    display():void{
        console.log("Abstract factory display working");
    }
    abstract info(): void
    abstract error(): void
}