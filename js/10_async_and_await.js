function ex_simple_async_await() {

    function resolveAfter2Seconds() {
        return new Promise(resolve => {
            setTimeout(() => {
            resolve('resolved!');
            }, 2000);
        });
    }
      
    async function asyncCall() {
        console.log('calling');
        var result = await resolveAfter2Seconds();
        console.log("result is " + result);    
    }
    
    asyncCall();

    
    console.log("\n================================ \n\n\n");
}

