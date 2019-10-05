0
var fs = require('fs');
// var jsonString = '{ "name": "Gabriel"}';

var jsonString = { 
    name: 'Gabriel'
};

fs.writeFile('data2.json', JSON.stringify(jsonString),
function(err) {
    if(err){
        console.log(err);
    }
});