const express = require ('express');
const client = require ('./client.js');
const app = express();

app.get('/check-vat/:NIP', function (req, res){

    client.checkVat(req.params.NIP)
        .then(function(result) {
        res.send(result);
    })
    .catch(function (err) {
        console.log(err);
        res.status(404);
        res.send(err);
    })
});

app.listen(3300);