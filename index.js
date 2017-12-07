'use estrict'

const express = require('express');
const app = express();
app.use(require('body-parser').json());
app.listen(process.env.PORT || 8080);
var chatbase = require('@google/chatbase');

app.post("/webhook", (req, res, next) => {  
  const action = req.body.result.action;
  switch(action) {   
    case 'prueba':

	var msg = chatbase.newMessage('c0f0424f-cf81-4f54-8287-006327e7bf4d', 'user-1234')
	.setPlatform('Dialogflow') 
	.setMessage('MY MESSAGE') 
	.setIntent('book-flight')  
	.setVersion('1.0') 
	.setMessageId('123') 
	.send()
	.then(msg => console.log(msg.getCreateResponse()))
	.catch(err => console.error(err));

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
