/*
const, let, var

//syntactic sugar - write less code
//new additions

const - value never changes
let - expect value to change
*/


//forEach - less code than for loop
function ex_const_let() {

/*Unlike var, let and const variables cannot be accessed outside their block scoping. Therefore you can have variables with the same names in blocks and children blocks. This is pretty nifty if various developers are working on different blocks at the same time. Also good for for loops. Const is read only so once declared it cannot be changed. This is good for handovers because you dont have to figure out which variables can change or not.*/

    const name =  'Bob'; // - value never changes
    let title =  'Box Packer'; //- expect value to change

    //name = 'Super Bob'; //wont work
    title = 'Supreme Box Packer';

    clog(name + ", a proud peon with the proffesion of " + title);



    clog("\n================================ \n\n\n");
}


function ex_tempate_strings() {

/*Template strings (or template literals), is pretty much a nicer way of joining javascript variables with a string instead of using double or single quotes you use back ticks (`) and encapsulate the variable (or any other js code) in ${}*/

    function getMessage() {
        const year = new Date().getFullYear();

        //return "The year is " + year; es5

        return `The year is ${year}, The previous year is ${year - 1} next year will be ${new Date().getFullYear() + 1}` ;
        
    }


    clog(getMessage());

    clog("\n================================ \n\n\n");
}


/*

ex_const_let();
clog_dom(ex_const_let.toString());

ex_tempate_strings();
clog_dom(ex_tempate_strings.toString());

*/