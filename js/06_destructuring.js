//

function ex_destructuring() {

/*when destructing properties or pulling properties of an object we can combine many operations into a single line*/

    var expense = {
        type: 'Business',
        amount: '$45 USD'
    }

    //es5, too much typing the same word
    var typeES5 = expense.type;
    var amountES5 = expense.amount;

    /*
    es6
    i want to declare a new variable called type
    and I want it to reference the expense.type/expense.amount propery
    please not the variable name must be the same as the property name*/

    const { type, amount } = expense;    

    //clog(`expenseES5  ${expenseES5.type} , ${expenseES5.amount} `);
    clog(`expense  ${expense.type} , ${expense.amount} `);

    clog("\n================================ \n\n\n");
}

function ex_destructuring_arguments_object() {

    var savedFile = {
        extension: 'jpg',
        name: 'repost',
        filesize: 14040
    }

    function fileSummaryEs5(file){
        return `the file ${file.name}.${file.extension} has size of ${file.filesize}`
    }

    //no need to reference file 3 times
    function fileSummary({name, extension, filesize}, {extraVar}){
        return `the file ${name}.${extension} has size of ${filesize}, also ${extraVar}`
    }


    clog( fileSummary(savedFile, {extraVar: 'potato'}) );

    clog("\n================================ \n\n\n");
}


function ex_destructuring_arrays() {

/*if destructuring objects was all about pulling properties, destructuring of arrays is all about pulling off individual elements*/

    const companies = ['Google', 'Facebook', 'Uber'];

    //destructuring properties requires curly brackets
    const { length } = companies;
    clog(`companies length is is ${length}`);

    //destructuring elements requires square brackets
    const [ name, name2 ] = companies;
    clog(`name1 is${name} | name2 is ${name2}`);

    const [ nameB, nameB2, nameB3, nameB4 ] = companies;
    clog( `nameb4 typeof is ${typeof nameB4} (should be undefined)` );

    //we can use the spread operator as well
    const [nameC, ...rest] = companies;
    clog(rest);

    clog("\n================================ \n\n\n");
}

function ex_destructuring_arrays_and_objects_at_the_same_time() {


    const companies = [
        {name: 'Google', location: 'Mountain View'},
        {name: 'Facebook', location: 'Menlo Park'},
        {name: 'Uber', location: 'San Francisco'},
    ];

    //gets the first element's location and second element's name
    const [ { location }, { name } ] = companies;
    clog(location);
    clog(name);


    const Google = {
        locations: ['London','Mountain View', 'New York']
    }

    //wtf
    //look at the locations property (returns array)
    //then pull out first element of array
    //useless?
    const { locations: [ locationz ] } = Google;
    clog(locationz);

    clog("\n================================ \n\n\n");
}

function ex_when_to_use_destructuring() {    
/*instead of passing a a list of variables, you can pass an object*/

    const user = {
        username: 'myname',
        password: '123abc',
        email: 'myname',
        dob: '1/1/1990',
        city: 'New York'
    }

    /*
    order of variables wont matter
    remember to add curly brackets*/
    function signup({city, username, password, email, dob}){
        return (`${username} ${password} ${email} ${dob} ${city}`)
    }

    clog(signup(user));

    /*converting an array of arrays to an array of objects*/
    
    const points = [
        [4,5],
        [10,1],
        [23,22]
    ];

    const points_object = points.map( ( [x, y] ) => {        
        //return { x: x, y: y }; 
        //line above can be simplified to
        return { x, y };
    });

    clog_table(points_object);

    clog("\n================================ \n\n\n");
}