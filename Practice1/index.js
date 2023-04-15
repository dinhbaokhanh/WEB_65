const express = require('express');
const app = express();

const data = ['Dinh Bao Khanh', 'WhoTao', 'Web'];
app.get('/', (req, res) => {
    res.end('Welcome to my server!');
});

app.get('/data', (req, res) => {
    res.json(data);
});

app.get('/data/:index', (req, res) => {
    const { index } = req.params;
    
    if(index > data.length - 1 || index < 0){
        res.json({
            message: 'Không tồn tại vị trí !',
        })
    } else {
        res.json({
            data: data[Number(index)],
        });
    }
});

app.get('/data/:index/:newData/update', (req, res) => {
    const { index, newData } = req.params;
    data[index] = newData;
    res.json(data);
});


app.listen(8000, () => {
    console.log('first');
})
// localhost:port
// https://localhost:8000
// RESTfull api
