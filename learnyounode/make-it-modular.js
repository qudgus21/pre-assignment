const mymodule = require('./mymodule.js')


mymodule(process.argv[2], process.argv[3], (err, data)=>{
	if(err){
		console.log(err)
	}else{
		data.forEach(item=>{
			console.log(item)
		})
	}
})


