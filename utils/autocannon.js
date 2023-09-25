const autocannon = require("autocannon");


module.exports = async (path) =>  {
    const instance = autocannon({
        url: `http://localhost:3010`,
        connections: 100,
        pipelining: 1,
        duration: 20,
        requests : [
            {
                method: 'GET',
                path
            }
        ]
    });
    function handleResults(results) {
        console.log(results)
    }
    instance.on('start', () => console.log(`Test Started`));
    instance.on('done', handleResults);
    autocannon.track(instance, {renderProgressBar: false})
};