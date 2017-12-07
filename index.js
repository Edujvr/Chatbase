'use estrict'

var chatbase = require('@google/chatbase')
	.setApiKey(process.env.c0f0424f-cf81-4f54-8287-006327e7bf4d) // Your Chatbase API Key
	.setPlatform('PLATFORM-X') // The platform you are interacting with the user over
	.setAsTypeUser(); // The type of message you are sending to chatbase: user (user) or agent (bot)

app.post("/webhook", (req, res, next) => {  
console.log('entro aqui');
  const action = req.body.result.action;
  console.log(action);
  switch(action) {   
    case 'prueba':

var msg = chatbase.newMessage('my-api-key', 'my-user-id')
	.setAsTypeUser() // sets the message as type user
	.setAsTypeAgent() // sets the message as type agent
	// WARNING: setTimestamp() should only be called with a Unix Epoch with MS precision
	.setTimestamp(Date.now().toString()) // Only unix epochs with Millisecond precision
	.setPlatform('PLATFORM-Z') // sets the platform to the given value
	.setMessage('MY MESSAGE') // the message sent by either user or agent
	.setIntent('book-flight') // the intent of the sent message (does not have to be set for agent messages)
	.setAsHandled() // set the message as handled -- this means the bot understood the message sent by the user
	.setAsNotHandled() // set the message as not handled -- this means the opposite of the preceding
	.setVersion('1.0') // the version that the deployed bot is
	.setUserId('user-1234') // a unique string identifying the user which the bot is interacting with
	.setAsFeedback() // sets the message as feedback from the user
	.setAsNotFeedback() // sets the message as a regular message -- this is the default
	.setMessageId('123'); // the id of the message, this is optional
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
