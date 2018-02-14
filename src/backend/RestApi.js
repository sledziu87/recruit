const express = require ('express');
const app = express();

app.get('/check-vat/:NIP', function (req, res){
    res.send({
        isVATpayer: true
    })
});

app.listen(3300);