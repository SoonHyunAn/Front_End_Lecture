// 백준 14681번
const readline = require("readline");
const rl = readline.createInterface({   
    input: process.stdin,
    output: process.stdout,
});
let input = []                          
rl.on('line', function(line){
	input.push(parseInt(line));
    input = line.split('\n').map((number) => Number(number));        
})
    
rl.on('close', () => {
    let X=input[0];
    let Y=input[1];
    let posi ='';

    switch(X>0, Y>0){
        case true, true:
            posi=1; break;
        case false, true:
            posi=2; break;
        case false, false:
            posi=3; break;
        case true, false:
            posi=4; break;
    }
    
    console.log(`${posi}`);

    process.exit();
})

