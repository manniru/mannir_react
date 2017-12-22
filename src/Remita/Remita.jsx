var sha512 = require('sha512');

const config = {
    demo: {
        merchantId: "2547916",
        serviceTypeId: "4430731",
        apiKey: 1946,
        gatewayUrl: "http://www.remitademo.net/remita/ecomm/v2/init.reg",
        gatewayRRRPaymentUrl: "ttp://www.remitademo.net/remita/ecomm/finalize.reg",
        checkStatusUrl: "http://www.remitademo.net/remita/ecomm",
        path: "http://localhost:3000"
    }
}

const remita_ordera_status = (orderId) => {
    
    var merchantId = config.demo.merchantId
    var api_key = config.demo.apiKey
    var serviceTypeId = config.demo.serviceTypeId
    var checkStatusUrl = config.demo.checkStatusUrl
    var url 	= checkStatusUrl + '/' + merchantId  + '/' + orderId + '/' + sha512(orderId + api_key + merchantId).toString('hex') + '/' + 'orderstatus.reg';    
    return fetch(url)
    .then(function(response) { return response.json()})
    .then(function(json) { return json;})
    .catch(function(ex) { console.log(ex)})
  };

  //console.log(remita_ordera_status('1234'))

  module.exports = config;
  module.exports = remita_ordera_status;

