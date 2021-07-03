let argv = process.argv;
let sum = 0;
for(let i=0; i<argv.length ; i++){
	if(!isNaN(argv[i])){
		sum += Number(argv[i]) 
	}
}

console.log(sum)
