
interface Shape {
    accept(visitor:Visitor): void;
};

interface Visitor {
    visitCircle(circle:Circle):void
    visitRectangle(rectangle:Rectangle):void
}


class Circle implements Shape{
    private radius:number;

    constructor(radius:number){
        this.radius = radius;
    };

    getRadius():number{
        return this.radius*this.radius;
    };

    accept(visitor: Visitor): void {
        visitor.visitCircle(this);
    }
}

class Rectangle implements Shape{
    private length:number;
    private width:number;

    constructor(length:number,width:number){
        this.length = length;
        this.width = width;
    };

    getArea():number{
        return this.length * this.width;
    };

    accept(visitor: Visitor): void {
        visitor.visitRectangle(this);
    }
};


class AreaCalculator implements Visitor {
    private totalArea:number;

    constructor(totalArea:number){
        this.totalArea = totalArea;
    };

    getTotalArea():number{
        return this.totalArea;
    }

    visitCircle(circle: Circle): void {
        const area = circle.getRadius();
        this.totalArea += area; 
    }

    visitRectangle(rectangle:Rectangle):void {
        const area = rectangle.getArea();
        this.totalArea += area;
    }
};


const shapes : Shape[] = [new Circle(3),new Rectangle(4,6),new Circle(5)];

const area_calculator = new AreaCalculator(47);

shapes.forEach(elem=>{
    elem.accept(area_calculator);
})


console.log(area_calculator.getTotalArea());