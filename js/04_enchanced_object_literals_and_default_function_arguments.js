function ex_enchanced_object_literals() {
    
/*enchanced object literals = 
writing object literals in a more compact function*/

    function createBookShop(inventory) {
        return {
            /*
            a)
            with es6 if the key and the value is the same then you can condense it to one word
            so inventory: inventory becomes*/
            inventory,

            /*
            b)
            you dont have to type function
            so inventoryValue: function() { becomes
            */
            inventoryValue() {
                //this adds the total price of our entire inventory
                return this.inventory.reduce((total,book) => total + book.price, 0);
            },

            /*
            c) you can also pass variables
            so priceForTitle: function(title) becomes*/
            priceForTitle(title) {
                return this.inventory.find(book => book.title === title).price;
            }
        };
    };

    const inventory = [
        { title: '50 Shades of Pengus', price: 10 },
        { title: 'Lord of Pengus', price: 15 }
    ]

    const bookShop = createBookShop(inventory);

    clog(`Price for total inventory is ${bookShop.inventoryValue()}`);
    clog( `Lord of Pengus costs ${bookShop.priceForTitle('Lord of Pengus')}` );


    clog("\n================================ \n\n\n");
}


function ex_default_function_arguments(){

    /*es5 function where we have to specify a default argument
    if there is no method var passed then set to get
    
    function makeAjaxRequest(url,method){
        if (!method){
            method = 'GET';
        }
    }
    */

    /*in es6 we can set default function arguments
    here get will be the default if no value is passed*/
    function makeAjaxRequest(url, method = 'GET'){
        return method;
    }

    clog(makeAjaxRequest('pengus.com','POST'));
    clog(makeAjaxRequest('pengus.com'));


    clog("\n================================ \n\n\n");
}
    


