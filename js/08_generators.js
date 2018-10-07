function ex_for_of_loop() {

/*iterating through arrays of data
tied to generators*/
    
    const colors = ['red', 'green', 'blue'];

    for (let color of colors) {
        clog(color);
    }

    const numbers = [1,2,3,4];
    let total = 0;
    for (let number of numbers){
        total += number;   
    }

    clog(total);

    clog("\n================================ \n\n\n");
}

//what is a generator?
//a generator is a function that can be entered and exited multiple times

//what does a generator do?

//iteration with generators

//generator delegation

//generators with Symbol.iterator


function ex_generators_simple_explanation(){

/*a generator is a function that can be entered and exited multiple times*/

    function* generator(i) {
        yield i; //a)
        yield i + 10; //b)
        return 'potato'; //c
        
        //why return instead of yield?
    }
    
    let gen = generator(10);
    
    //a)
    clog(gen.next().value + ' (expected output: 10), is it done?'); //.done should be false
    
    //b)
    clog(gen.next().value + ' (expected output: 20)'); //.done should be false
    
    //c
    clog(gen.next().value + ' (expected output: potato)'); //.done should be true
    
    //d)
    clog(gen.next().value + ' (expected output: undefined)');    

    //every time you call next, it executes next yield keyword


    clog("\n================================ \n\n\n");        
}


/*
                                * start walking to the store
                                * still walking
                                * at the store! going in with money
                            cash |
* in the store... see you soon...
                            | groceries
                                * im back with groceries
                                * see you soon
*/

function ex_generators_mindfuck_explanation() {

/*a generator is a function that can be entered and exited multiple times

when we call a function it runs and maybe retuns a value generators run code, returns value and go back into the generator where we left it (wut)
*/

    //add a star to create a generator
    function* shopping() {
        //stuff on the sidewalk

        //walking down the sidewalk

        //go into the store with cash
        const stuffFromStore = yield 'cash';
    
        //walking to laundry place
        const cleanClothes = yield 'laundry';

        //walking back home
        return [stuffFromStore, cleanClothes];
    }

    const gen = shopping(); //does not invoke any code here    
    clog( gen.next() ); //leaving our house    
    // walking up and down the aisles
    // purchase our stuff
    clog( gen.next('groceries') );//leaving the store with grocieries ('groceries replaces cash')
    clog( gen.next('clean clothees') );


    //every time you call next, it executes next yield keyword

    clog("\n================================ \n\n\n");
}


function ex_why_use_generators() {
/*generators work perfectly with for of loops*/

    function* colors(){
        yield 'red';
        yield 'blue';
        yield 'green';
    }

    const myColors = [];

    for (let color of colors()){
        myColors.push(color);
    }

    clog(myColors);


    /*========================================================================================================================*/

//iterate specific properties (names) of a custom object

    const engineeringTeam = {
        size: 3,
        department: 'Engineering',
        lead: 'Jill',
        manager: 'Alex',
        engineer: 'Dave'
    }
    
   
    function* TeamIterator(team) {
        yield team.lead;
        yield team.manager;
        yield team.engineer;
    }

    const names = [];
    for (let name of TeamIterator(engineeringTeam)){
        names.push(name);
    }

    clog(names);



    clog("\n================================ \n\n\n");
}

function ex_combining_multiple_generators() {
//generator delegation

    const testingTeam = {
        lead: 'Amanda',
        tester: 'Bill'
    };

    const engineeringTeam = {
        testingTeam: testingTeam,
        size: 3,
        department: 'Engineering',
        lead: 'Jill',
        manager: 'Alex',
        engineer: 'Dave'
    }


    function* TestingTeamIterator(team) {
        yield team.lead;
        yield team.tester;
    }

    function* TeamIterator(team) {
        yield team.lead;
        yield team.manager;
        yield team.engineer;

        //get team members from testingTeamIterator
        const testingTeamGenerator = TestingTeamIterator(team.testingTeam);
        /*
        yield* is kinda like a trapdoop which makes it fall to the TestingTeamIterator
        this is generator delegation in practice
        */
        yield* testingTeamGenerator;
    }

    

    const names = [];
    for (let name of TeamIterator(engineeringTeam)){
        names.push(name);
    }

    clog(names);

    clog("\n================================ \n\n\n");
}

function ex_generators_and_symbol_iterator(){

/*symbol iterator is a tool that teaches objects how to respond to the for of loop    

symbol* means theres this other object, find it and figure out how to iterate over it*/
    
    const testingTeam = {
        lead: 'Amanda',
        tester: 'Bill',        
        [Symbol.iterator]: function* () {
            yield this.lead;
            yield this.tester;
            //you can yield more stuff i you want
            //yield 5;
            //yield this;
        }
    };

    const engineeringTeam = {
        testingTeam: testingTeam,
        size: 3,
        department: 'Engineering',
        lead: 'Jill',
        manager: 'Alex',
        engineer: 'Dave',
        [Symbol.iterator]: function* (){
            yield this.lead;
            yield this.manager;
            yield this.engineer;
            yield* this.testingTeam;
        }
    }


    const names = [];
    for (let name of engineeringTeam){
        names.push(name);
    }

    clog(names);

    clog("\n================================ \n\n\n");

}



function ex_generators_with_recursion(){
 
/*replicating reddit's comment strucutre
where comments have children who have their own children who have their own children etc
sidenote - array helpers do not work with generators*/

    class Comment {
        constructor( content, children ){
            this.content = content;
            this.children = children;
        }

        *[Symbol.iterator](){
            yield this.content;
            for (let child of this.children){
                yield* child;
            }
        }
    }

    const children = [
        new Comment('good comment', []),
        new Comment('bad comment', []),
        new Comment('meh', [])
    ];

    const tree = new Comment('Great post!', children);
    //clog_table(tree);

    values = [];

    for (let value of tree) {
        values.push(value);
    }

    clog_table(values);

    clog("\n================================ \n\n\n");
}