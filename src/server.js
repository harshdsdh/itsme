const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const router = express.Router();

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
  //__dirname : It will resolve to your project folder.
});
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.post("https://harshdsdh.github.io/itsme/", (req, res) => {
  console.log(req.body);
  let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false
    },
    auth: {
      user: "hamishra@syr.edu", // generated ethereal user
      pass: "ramsewakMishra1!" // generated ethereal password
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: `"{req.body.name}" {req.body.email}`, // sender address
    to: "hamishra@syr.edu", // list of receivers
    subject: req.body.subject, // Subject line
    text: req.body.message, // plaintext body
    html: req.body.message // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
  });
  res.send("Message sent");
});
app.use("/", router);
app.listen(process.env.port || 4000);

console.log("Running at Port 4000");
