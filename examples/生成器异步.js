const fs = require('fs')

// fs.readFile('./examples/generator1.html', (err, data) => {
// 	if (err) throw err
// 	console.log(data.toString())
// })

// promise
let readHtml = new Promise((resolve, reject) => {
	fs.readFile('./examples/generator1.html', (err, data) => {
		if (err) reject(err)
		resolve(data)
	})
})

let res = readHtml.then(
	(val) => {
		console.log(val.toString())
		return '123'
	},
	(err) => console.log(err)
)
res.then((val) => console.log(val))

// function readHtml() {
// 	fs.readFile('./examples/generator1.html', (err, data) => {
// 		if (err) throw err
// 		iterator.next(data)
// 	})
// }

// function* gen() {
// 	let data = yield readHtml()
// 	// 处理数据
// 	console.log(data.toString())
// }

// let iterator = gen()
// iterator.next()
