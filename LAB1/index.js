const express = require('express');
const app = express();

// const data = [
// 	{"name": "Alice", "age": 10},
// 	{"name": "Bob", "age": 11},
// 	{"name": "Charlie", "age": 11},
// ]

// app.get('/data', (req, res) => {
//     res.json(data);
// })

// app.get('/data/:index', (req, res) => {
// 	const {index} = req.params;
// 	res.json(data[Number(index)]);
// })

// app.get('/data/:index/name', (req, res) => {
// 	const {index} = req.params;
// 	res.json(data[Number(index)].name);
// })

// app.listen(8000, () => {
//     console.log("Hello !");
// })









// const data = [
// 	{username: 'alice', apiKey: 'alice@123'},
//   	{username: 'bob', apiKey: 'bob@123'},
//   	{username: 'charlie', apiKey: 'charlie@123'}
// ]

// app.get('/data', (req, res) => {
// 	res.json(data);
// })

// app.get('/data/add', (req, res) => {
// 	data.push({username: 'david', apiKey: 'david@123'})
// 	res.json(data)
// })

// app.get('/data/:index', (req, res) => {
// 	const { index } = req.params;
// 	if(index > data.length - 1 || index < 0){
//         res.json({
//             message: 'Không tồn tại vị trí !',
//         })
//     } else {
//         res.json({
//             data: data[Number(index)],
//         });
//     }
// }) 

// app.delete('/data/:index', (req, res) => {
// 	const { index } = req.params;
// 	data.remove([Number(index)]);
// 	return res.json();
// });

// app.listen(8000, () => {
// 	console.log("first")
// })

 