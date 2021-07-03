const fs = require('fs')
const path = require('path')

const read = (dir,fstr, callback) => {
	fs.readdir(dir, (err, list)=>{
		if(err){
			return callback(err);
		}else{
			list = list.filter(item=> path.extname(item)=== '.'+fstr)
		}
		return callback(null,list)
	})
}

module.exports = read
