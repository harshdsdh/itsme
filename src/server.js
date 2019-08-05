/*var express = require("express");
var nodemailer = require("nodemailer");
var app = express();
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.js");
});
app.post("/", (req, res) => {
  // create reusable transporter object
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
      user: "",
      pass: ""
    }
  });

  // setup email data
  let mailOptions = {
    from: req.body.email, // sender address
    to: "harsh.dsdh@gmail.com", // list of receivers
    subject: req.body.subject + " - " + req.body.email, // Subject line
    text: req.body.message // plain text body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent");
  });
  res.redirect("back");
});

app.listen(5000, function() {
  console.log("Express Started on Port 5000");
});
*/
