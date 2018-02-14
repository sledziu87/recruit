const express = require ('express');
const app = express();

app.get('/check-vat', function (req, res){

    res.send({
        test: "test word"
    })
});

app.listen (3300);