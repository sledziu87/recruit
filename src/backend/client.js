const soap = require('soap');
const url = 'http://ec.europa.eu/taxation_customs/vies/checkVatService.wsdl';

const args = {  // todo check is it good, using const at this place
    countryCode: 'PL',
    vatNumber:  "5832968619",
};

soap.createClient(url, function(err, client) {
    client.checkVat(args, function(err, result) {
        console.log(result);
    });
});