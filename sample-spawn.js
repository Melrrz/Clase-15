const {spawn} = require('child_process');
const result = spawn ('git', ['branch']);

const callback = (data) => {
    console.log(`stdout: ${data}`)
};

//opcion resumida
result.stdout.on('data', callback);
//opcion c/arrow
result.stdout.on('data',(data) => {
    console.log(`stdout: ${data}`);
})
//opcion detallada
result.stdout.on('data', function(data){
    console.log(`stdout: ${data}`);
})