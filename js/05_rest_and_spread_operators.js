function ex_rest_and_spread_operators() {
    
/*rest operator
gathers variables (...numbers)
this is good if you dont know how many arguments you are passing*/

    function addNumbers(...numbers){
        return numbers.reduce((sum,numbers) => {
            return sum + numbers;
        },0);
    }

    clog( addNumbers(1,2,3,4,5,6,7) ); //note that this is not an array

/*spead operator
flatten (spreads) variables
alternative to concat method
*/

    const defaultColors = ['red','green'];
    const userFavoriteColors = ['orange','yellow'];
    const fallColors = ['plong','hlong'];

    clog("concat: " + defaultColors.concat(userFavoriteColors).concat(fallColors));

    //create new array by referencing existing arrays
    clog("spead operator: " + [...defaultColors, ...userFavoriteColors, ...fallColors]);

    //you can also add values which are not in an array
    clog(['black', ...defaultColors, ...userFavoriteColors, ...fallColors]);


    // you can also combine rest and spread
    function validateShoppingList(...items){
        //check if shopping list has milk
        if (items.indexOf('milk')< 0) {
            //if it doesnt, add it to the list
            return['milk', ...items]
        }
        //else just return the list as is
        return items;
    }

    clog(validateShoppingList('oranges','bread','eggs'));

    /*if you have an obsolete method but dont want to remove it due to conflict issues you can use ...rest and not have duplicate logic*/
    const mathLibrary = {
        oldMethodName(...rest){
            clog("this method is deprecated dawg, use multiply instead")
            return this.multiply(...rest);
        },
        multiply(a,b) {
            return a * b;
        }
    }

    clog(mathLibrary.oldMethodName(2,3));

    clog("\n================================ \n\n\n");
}