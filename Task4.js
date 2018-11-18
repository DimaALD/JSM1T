const request = require('request-promise')

let options = {
    method : 'GET',
    uri :'http://services.groupkt.com/country/get/all',
    json : true
}

request(options).then(body=>{
    printCountry(body.RestResponse.result, 'Belarus')
}).catch(err => {console.log(err.message)})

function printCountry(json, country) {
    for(let value in json) {
        if(json[value].name === country){
            console.log(json[value])
        }
    }
}


