function ex_promises() {
/*
es6 brings native promises to javascript
javascript executes line by line - no pausing
so if we try to log something before its loaded, we will get undefined
*/

/*
3 states of promises
UNRESOLVED - waiting for something to finish
RESOLVED - something finished and it all went OK
REJECTED - something finished and it all went bad

status 'resolved' => callback 'then'
status 'REJECTED' => callback 'catch'

you can add functions in the callbacks to deal with the status

*/

    let promise = new Promise((resolve, sreject) =>{        

        setTimeout(() => {
            //resolve and reject can be triggered manually
            resolve();
            //reject();   
        }, 1000);
        
    });

    //then() and catch() register callbacks
    promise.then(() => {
        clog('promise is fulfilled :) ');
    }).catch(() => {
        clog('promise is not fulfilled :( ');
    })

    clog("\n================================ \n\n\n");
}

function ex_fetch_helper(){

/*fetch makes ajax requests

fetch already has promises built in

it should be noted that fetch fails only if the network request fails which can cause issues

which kinda sucks so its still best to use other stuff like jquery*/

    const url = 'https://jsonplaceholder.typicode.com/posts/';

    fetch(url)
        .then(() => clog('fetch promise is fulfilled :) '))
        .catch(() => clog('fetch promise is not fulfilled :( '));
  
    fetch(url)
        .then(response => response.json())
        .then(ze_data => {            
            clog('fetch promise is fulfilled and data was retrieved :) ');
            clog_table(ze_data);
        })
        .catch(ze_error => {            
            clog('fetch promise is not fulfilled and data was not retrieved :( ');
            clog(ze_error);            
        });

    clog("\n================================ \n\n\n");
}

function exz_fetch_helper_issues() {
    clog("\n================================ \n\n\n");
}