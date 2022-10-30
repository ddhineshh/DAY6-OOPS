class circle{
    constructor(radius,color){
        this.radius = radius;
        this.color = color;
    }

    getRadius(){
    console.log(`Radius of the circle is ${this.radius}`)
    }

    getColor(){
    console.log(`Color of the circle is ${this.color}`)
    }

    getArea(){
    let pi = 3.14;
    console.log(`Area of circle is ${pi*(this.radius*this.radius)}`)
    }

    getCircumference(){
    let pi = 3.14;
    console.log(`Circumference of circle is ${2*pi*this.radius}`)
    }
    setRadius()
    {
    this.radius = 4
    console.log(this.radius)
    }
}

let circlee = new circle(3,"red");

circlee.getRadius();
circlee.getColor();
circlee.getArea();
circlee.getCircumference();
circlee.setRadius();