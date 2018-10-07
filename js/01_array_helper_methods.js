/*
Array helper Methods

(the goal for this is to not use for loops again)

forEach //swiss army knife of helpers - all other helpers can be recreared using for each
map //most widely used array helper, great for avoiding mutating arrays
Filter
find //forEach but with break function once it finds what it wants
every //equivalent of && for every value in array condesning array into a single value (string or boolean)
some //equivalent of || for every value in array, condesning array into a single value (string or boolean)
reduce


*/

//forEach - less code than for loop
function ex_forEach_array_helper() {

/*
forEach Array Helper
less code than for loop, swiss army knife of helpers - all other helpers can be recreared using for each
*/

    let colors = ['red','blue','green'];

    colors.forEach(function(color){
        clog(color);
    });



    let numbers = [1,2,3,4,5];
    let sum = 0;

    numbers.forEach(adder); //this does not required parenthesis
    
    function adder(number){        
        sum += number;
    }

    clog(sum);

    clog("\n================================ \n\n\n");
}

//===============================================================================/


//map
function ex_map_array_helper() {

/*
map Array Helper
most widely used array helper, great for avoiding mutating arrays";
*/

    let numbers = [1,2,3];
    let doubledNumbers = numbers.map(function(number) {
        //return is always required in map functions otherwise youll get null
        return number * 2;
    });

    clog(doubledNumbers);


    
    let cars = [
        {model: 'Buick', price: 'Cheap'},
        {model: 'Camaro', price: 'Expensive'}
    ]

    let prices = cars.map(function(car){ //this is called plucking because you pluck a a value
        return car.price;
    });

    clog(prices);



    let paints = [{color: 'red'}, {color: 'blue'}, {color: 'yellow'}]

    function pluck(array,property){

        let colors = array.map(function(color){ //this is called plucking because you pluck a a value
            return color[property];
        });
        clog(colors);
    }

    pluck(paints,'color');

    clog("\n================================ \n\n\n");
}

//===============================================================================/

//filter helper
function ex_filter_array_helper() {

/*Filter helper*/

    const products = [
        {name: 'cucumber', type: 'vegetable', quantity: 0, price: 1},
        {name: 'banana', type: 'fruit', quantity: 10, price: 15},
        {name: 'celery', type: 'vegetable', quantity: 30, price: 13},
        {name: 'orange', type: 'fruit', quantity: 3, price: 5}
    ]

    let filteredProducts = products.filter(function(product){
        return product.type === 'fruit';
    });

    clog_table(filteredProducts);

    //type is vegetable, quantity is greater than 0, price is less than 10
    let filteredProducts2 = products.filter(function(product){
        return product.type === 'fruit' 
            && product.quantity > 0 
            && product.price < 10;
    });

    clog_table(filteredProducts2);

    let post_var = { id: 4, title: 'New Post'};
    let comments_var = [
        {postId: 4, content: 'awesome post'},
        {postId: 3, content: 'it was ok'},
        {postId: 4, content: 'neat'},
    ]

    function commentsForPost(post,comments) {
        return comments.filter( function(comment) {
            return comment.postId === post.id;
        });
    }

    //get all comments which have the postId of post_var id
    clog_table(commentsForPost(post_var,comments_var));

    clog("\n================================ \n\n\n");
}

//===============================================================================/

//find
function ex_find_array_helper() {

/*find helper
forEach but with break function once it finds what it wants";*/

    let users = [
        {name: 'Jill'},
        {name: 'Alex'},
        {name: 'Bill'}
    ]    

    /*iterate through array until it finds the first true statement which is bad if multiple people have the same name since it returns the first true value
    also if !== us used, it will return the first false and stop*/
    let user = users.find(function(user){
        return user.name === 'Alex';
    });

    clog(user);

    function car_function(model) {
        this.model = model;
    }

    let cars = [
        new car_function('Buick'),
        new car_function('Camaro'),
        new car_function('Focus'),
    ]

    let car = cars.find(function(car){
        return car.model === 'Focus';
    });

    //get car whose model is focus
    clog(car);

    
    let posts_var = [
        {id: 1, title: 'New Post'},
        {id: 2, title: 'Old Post'}
    ]

    let comment_var = { postId: 2, content: 'Great post' };

    function postForComment(posts,comment) {
        return posts.find(function(post){
            return post.id === comment.postId;
        });
    }


    //get
    clog( postForComment(posts_var,comment_var) );





    clog("\n================================ \n\n\n");
}


//===============================================================================/

//every and some
function ex_every_and_some_array_helper() {

/*every and some Array Helper 
equivalent of && and || respectively for every value in array, condesning array into a single value (string or boolean)";  */

    let computers = [
        {name: 'Apple', ram: 24},
        {name: 'Apple', ram: 4},
        {name: 'Acer', ram: 32}
    ];

    //will all computers run the program that requires 16 gigs or more?
    let allComputersCanRunProgram = computers.every(function(computer){
        return computer.ram >= 16;
    });

    //will any of the computers run the program that requires 16 gigs or more?
    let onlySomeComputersCanRunProgram = computers.some(function(computer){
        return computer.ram >= 16;
    });

    clog("every = " + allComputersCanRunProgram);
    clog("some = " + onlySomeComputersCanRunProgram);


    var names = [
        "Alexandria",
        "Matthew",
        "Joe"
    ]

    var EveryNameCharGreaterTnan4 = names.every(function(name){
        return name.length > 4;
    });

    var SomeNameCharGreaterTnan4 = names.some(function(name){
        return name.length > 4;
    });

    clog("every = " + EveryNameCharGreaterTnan4);
    clog("some = " + SomeNameCharGreaterTnan4);


    function Field(value) {
        this.value = value;
    }

    Field.prototype.validate = function() {
        return this.value.length > 0;
    }

    var username = new Field("2cool");
    var password = new Field("p@ssw0rd");
    var birthday = new Field("10/10/2010");
    //birthday = new Field("");

    var fields = [username, password, birthday];

    var validate_fields = fields.every(function(field){
        return field.validate();
    });

    clog("is every field valid? " + validate_fields);

    clog("\n================================ \n\n\n");
}

//===============================================================================/

//reduce
function ex_reduce_array_helper() {

/*
reduce Helper
wtf is this???? 

"The reduce() method applies a function against an accumulator and each 
element in the array (from left to right) to reduce it to a single value."
sums up an array
*/
    
    var numbers = [10, 20, 30];
    var sum = 0;
    
    //with reduce you pass an initial value, here it is -10
    var reduce_var = numbers.reduce(function(sum, number){
        return sum + number;
    }, -10);

    clog(reduce_var);
    

    var primaryColors = [
        {color: 'red'},
        {color: 'yellow'},
        {color: 'blue'}
    ];

    //default value here is an array
    var wut = primaryColors.reduce(function(previous, primaryColor) {
        
        //made change to previous value and returned it
        previous.push(primaryColor.color);
        return previous;

    }, []);

    clog(wut);

    //check if parenthesis are balanced

    function balancedParens(string) {
        /*
        the !string will make it return a boolean instead of an integer, all positive numbers are true, negative and zero are false
        */
        return !string.split("").reduce(function(previous,char){
            /*previous (0) is a counter, every time we see an opening parenthesis, we will ++, for a closing parenthesis -- if we have a counter greater than one then it will be unbalanced

            this is to catch the error if the first char is a closing parenthesis. this will trigger on the second pass since the first pass will be --previous and previous is 0, therefore previous will be -1
            */
            if (previous < 0)
            {
                return previous;
            }

            if (char === "(")
            {
                return ++previous;
            }
            else if (char === ")")
            {            
                return --previous;
            }

            //this is for non parenthesis characters
            return previous;

        }, 0);
    }

    clog("balancedParens " + balancedParens("()(())"));

    clog("\n================================ \n\n\n");
}

