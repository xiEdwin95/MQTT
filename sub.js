var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://localhost:1883')


client.on('connect', function () {
    client.subscribe('/leakage/log');
  })
  

client.on('message', function (topic, payload) {
    const obj = JSON.parse(payload.toString())
    console.log(JSON.stringify(obj))
})




client.on('error', function(){
    console.log("ERROR")
    client.end()
})
client.on('offline', function() {
    console.log("offline");
});
client.on('reconnect', function() {
    console.log("reconnect");
});