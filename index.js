"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

const {
  dialogflow,
  Image,
} = require('actions-on-google')

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// Create an app instance
const app = dialogflow()

// app.intent('Default Welcome Intent', conv => {
//   conv.ask('Hi, how is it going?')
//   conv.ask(`Here's a picture of a cat`)
//   conv.ask(new Image({
//     url: 'https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/imgs/160204193356-01-cat-500.jpg',
//     alt: 'A cat',
//   }))
// })

restService.use(bodyParser.json());

restService.post("/echo", function(req, res) {
  var speech =
    req.body.result &&
    req.body.result.parameters &&
    req.body.result.parameters.echoText
      ? req.body.result.parameters.echoText
      : "Seems like some problem. Speak again.";
  
  conv.ask('Hi, how is it going?')
  
  return res.json({
    speech: speech,
    displayText: speech,
    source: "webhook-echo-sample"
  });
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
