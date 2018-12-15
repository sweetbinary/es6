function ex_arrow_functions() {

    const add = (a, b) => {
        return a + b;
    }
    console.log( add(1,2) );

    /*shorthand way of the function above, no return needed*/

    const subtract = (a, b) => a - b;
    console.log( subtract(20,12) );



    /*even shorter shorterhand, you can only omit the parenthesis on the argument bit if there is only a single argument*/

    const double = number => 2 * number;
    console.log(double(10));



    /*if there are no arguments passed, you still need the parenthesis*/
    const return_potato = () => {
        return 'potato';
    }
    console.log(return_potato());


    
    /*this compact syntax wont work because it has a semicolon after the function body
    const double_broken = (number => 2 * number;);*/



    //combination of fat arow function and map array helper
    const numbers = [1,2,3];    
    //this
    let doubledNumbers = numbers.map(function(number) {        
        return number * 2;
    });
    //becomes this
    doubledNumbers = numbers.map(number => 2 * number);
    
    console.log( doubledNumbers );


    console.log("\n================================ \n\n\n");
}

function ex_arrow_functions() {

    const add = (a, b) => {
        return a + b;
    }
    console.log( add(1,2) );

    /*shorthand way of the function above, no return needed*/

    const subtract = (a, b) => a - b;
    console.log( subtract(20,12) );


    /*even shorter shorterhand, you can only omit the parenthesis on the argument bit
    if there is only a single argument*/

    const double = number => 2 * number;
    console.log(double(10));



    /*if there are no arguments passed, you still need the parenthesis*/
    const return_potato = () => {
        return 'potato';
    }
    console.log(return_potato());


    
    /*this compact syntax wont work because it has a semicolon after the function body
    const double_broken = (number => 2 * number;);*/



    /*combination of fat arow function and map array helper*/
    const numbers = [1,2,3];    
    //this
    let doubledNumbers = numbers.map(function(number) {        
        return number * 2;
    });
    //becomes this
    doubledNumbers = numbers.map(number => 2 * number);
    
    console.log( doubledNumbers );


    console.log("\n================================ \n\n\n");
}

function ex_when_to_use_arrow_functions() {

//fat arrow functions make the value of this behave as we would expect and hope it to

    const team = {
        members: ['Jane','Bill'],
        teamName: 'Super Squad',
        teamSummary: function() {

            /*return this.members.map(function(member){
                //when passing an anomyous function, the value of this is lost
                //so this.teamName would be undefined
                return `${member} is on team ${this.teamName}`;
            });*/
            
            return this.members.map((member) => {
                /*fat arrows use lexical this, which depending where we use this, 
                it will change when we are using a fat arrow function
                so here this is equals to const team*/
                return `${member} is on team ${this.teamName}`;
            });

        }
    }
    

    //not working lol, check capitel 11-29 @ 4:01
    console.log(team.teamSummary());
    
    console.log("\n================================ \n\n\n");
}

    /*
ex_arrow_functions();
console.log_dom(ex_arrow_functions.toString());


ex_when_to_use_arrow_functions();
console.log_dom(ex_when_to_use_arrow_functions.toString());

*/