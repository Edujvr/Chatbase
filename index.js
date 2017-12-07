'use estrict'

var chatbase = require('@google/chatbase')
	.setApiKey(c0f0424f-cf81-4f54-8287-006327e7bf4d) // Your Chatbase API Key
	.setPlatform('PLATFORM-X') // The platform you are interacting with the user over

app.post("/webhook", (req, res, next) => {  
  const action = req.body.result.action;
  switch(action) {   
    case 'prueba':

	var msg = chatbase.newMessage('my-api-key', 'my-user-id')
	.setAsTypeUser() 
	.setAsTypeAgent() 
	.setPlatform('PLATFORM-Z') 
	.setMessage('MY MESSAGE') 
	.setIntent('book-flight') 
	.setAsHandled() 
	.setAsNotHandled() 
	.setVersion('1.0') 
	.setUserId('user-1234') 
	.setAsFeedback() 
	.setAsNotFeedback() 
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
