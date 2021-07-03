const fs = require('fs')

let bf = fs.readFileSync(process.argv[2]).toString()

let cnt = 0;


for(let i=0; i<bf.length ; i++){
	if(bf[i]==='\n'){
		cnt++;	
	}
}

console.log(cnt)
