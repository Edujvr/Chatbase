'use estrict'

const express = require('express');
const app = express();
app.use(require('body-parser').json());
app.listen(process.env.PORT || 8080);
var chatbase = require('@google/chatbase');

app.post("/webhook", (req, res, next) => {  
  const action = req.body.result.action;
  switch(action) {   
    case 'control':
//Envio de información a Chatbase libreria @google/chatbase
	var msg = chatbase.newMessage('da9339a8-3149-4788-b348-8ddf5a3046a7', req.body.sessionId)
	.setPlatform('Dialogflow') 
	.setMessage(req.body.result.resolvedQuery) 
	.setIntent(req.body.result.metadata.intentName)  
	.setVersion('1.0') 
	.setMessageId(req.body.id) 
	.send()
	.then(msg => console.log(msg.getCreateResponse()))
	.catch(err => console.error(err));
//Envio de información a Google Analytics libreria request
	const url = 'https://www.google-analytics.com/collect?v=1&t=event&tid=UA-111480355-1&cid='+req.body.sessionId+'&dh=www.google-analytics.com&ec=Intento&ea='+req.body.result.metadata.intentName+'&el='+req.body.result.resolvedQuery+'&ev=1&aip=1';
     	var request = require('request');
		request.get(encodeURI(url))
       		.on('error', function(err){
          	if (err) throw err;
	  	console.log('Successfully logged to GA , Response to Dialogflow');
        });
//Envio de información webhook a Dialogflow		  
	res.json({
            messages: req.body.result.fulfillment.messages,
            speech: req.body.result.fulfillment.speech,
            displayText: req.body.result.fulfillment.speech,
            contextOut: req.body.result.contexts,
            source: req.body.result.source
          });
      break; 
  }
});
