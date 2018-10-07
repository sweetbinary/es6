function ex_simple_async_await() {

    function resolveAfter2Seconds() {
        return new Promise(resolve => {
            setTimeout(() => {
            resolve('resolved!');
            }, 2000);
        });
    }
      
    async function asyncCall() {
        clog('calling');
        var result = await resolveAfter2Seconds();
        clog("result is " + result);    
    }
    
    asyncCall();

    
    clog("\n================================ \n\n\n");
}

