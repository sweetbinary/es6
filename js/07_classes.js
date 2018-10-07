function es5_classes() {

    //javascript does not have true inheritance, instead it has prototypal inheritance
    //what is prototypal inheritance is?

    //basic object creation with js es5
    function Car(options){
        this.title = options.title;
    }
    Car.prototype.drive = function (){
        return 'vroom';
    }
    const carEs5 = new Car({title: 'Focus'})
    clog(carEs5);
    clog(carEs5.drive());

    //how do we make toyota inherit car?
    function Toyota(options) {        
        Car.call(this,options);
        this.color = options.color;
    }
    Toyota.prototype = Object.create(Car.prototype);
    Toyota.prototype.constructor = Toyota;
    Toyota.prototype.honk = function(){
        return 'beep';
    }
    const toyota = new Toyota({ color: 'red', title: 'Daily Driver'});
    clog(toyota);
    clog(toyota.drive());
    clog(toyota.honk());

    
    
    clog("\n================================ \n\n\n");
}

function ex_classes() {
    //see inside js file for es5 example of this

    //class Car
    class Car {
        /*
        constructor is pretty much the init method for es6 classes

        since this only takes one param, might as well deconstruct it        */
        constructor({title}) {
            this.title = title;
        }

        //custom method drive
        drive() {
            return 'vroom';
        }
        //please note you do not need to
        //seperate your methods with commas here
    }

    /*
    extends Car removes all the boilerplate garbage from the es5 example    
    extends = I want Toyota to have access all the methods inside Car    
    */
    class Toyota extends Car {        
        constructor( options ) {
            /*
            whenever we have a subclass (toyota) that wants to call a method on the parent and that same method is declared on both sides             we refer to the super keyword
            */
            super(options);//Car.constructor
            this.color = options.color;
        }

        honk(){
            return 'beep';
        }
    }

    const car = new Car({title: 'Toyota'});
    clog_table(car);
    clog(`const car ${car.drive()}`);

    clog("------");

    const toyota = new Toyota({ title: 'Toyota Plonk', color: 'red' });
    clog_table(toyota);
    clog(`const toyota ${toyota.honk()}`);    

        
    clog("\n================================ \n\n\n");
}

function zzx_when_to_use_classes() {
    //this requires react

        
    clog("\n================================ \n\n\n");
}