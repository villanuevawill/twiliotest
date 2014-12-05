// Twilio Credentials 
var accountSid = ENV_sid; 
var authToken = ENV_token
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
 
client.messages.create({ 
	to: "5052508462", 
	from: "+15058145469", 
	body: "Yo!",   
}, function(err, message) { 
	console.log(message.sid); 
});