const soap = require('soap');
const url = 'http://ec.europa.eu/taxation_customs/vies/checkVatService.wsdl';

module.exports = {
    checkVat: function(NIP){
        return new Promise(function(resolve, reject) {

            const args = {
                countryCode: 'PL',
                vatNumber:  NIP,
            };

            soap.createClient(url, function(err, client) {
                err
                    ? reject(err)
                    : (client.checkVat(args, function(err, result){
                        err
                            ? reject(err)
                            :(((result.name === '---') && (result.address === '---'))
                                ? reject("Incorrect NIP number")
                                : ((result.valid === false )
                                    ? reject( "That company is not a VAT payer")
                                    : resolve(result)));
                    }));
            });
        })
    }

};

