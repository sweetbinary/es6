function ex_rest_and_spread_operators() {
    
/*rest operator
gathers variables (...numbers)
this is good if you dont know how many arguments you are passing*/

    function addNumbers(...numbers){
        return numbers.reduce((sum,numbers) => {
            return sum + numbers;
        },0);
    }

    console.log( addNumbers(1,2,3,4,5,6,7) ); //note that this is not an array

/*spead operator
flatten (spreads) variables
alternative to concat method
*/

    const defaultColors = ['red','green'];
    const userFavoriteColors = ['orange','yellow'];
    const fallColors = ['plong','hlong'];

    console.log("concat: " + defaultColors.concat(userFavoriteColors).concat(fallColors));

    //create new array by referencing existing arrays
    console.log("spead operator: " + [...defaultColors, ...userFavoriteColors, ...fallColors]);

    //you can also add values which are not in an array
    console.log(['black', ...defaultColors, ...userFavoriteColors, ...fallColors]);


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

    console.log(validateShoppingList('oranges','bread','eggs'));

    /*if you have an obsolete method but dont want to remove it due to conflict issues you can use ...rest and not have duplicate logic*/
    const mathLibrary = {
        oldMethodName(...rest){
            console.log("this method is deprecated dawg, use multiply instead")
            return this.multiply(...rest);
        },
        multiply(a,b) {
            return a * b;
        }
    }

    console.log(mathLibrary.oldMethodName(2,3));

    console.log("\n================================ \n\n\n");
}