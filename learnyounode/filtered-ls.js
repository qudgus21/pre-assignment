const fs = require('fs')

fs.readdir(process.argv[2],(err, data)=>{
	if(err){
		console.log(err)
		return
	}else{
		let result = data.filter(item=>
			item.includes('.' + process.argv[3])		
		)

		result.forEach(item=>console.log(item))
	}
})
