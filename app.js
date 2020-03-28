const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();
const app = express();
app.use(bodyParser.json());
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});
app.use(express.static("client/build"));

app.post("/contact", (req, res) => {
  const data = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  };
  const { name, email, message } = data;
  var mailOptions = {
    from: email,
    to: "shresthabbks@gmail.com",
    subject: "Contact form ",
    text: `${message} from ${name}`,
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      res.send(error);
    } else {
      //   console.log("Email sent: " + info.response);
      res.send("Email Send");
    }
  });
});
if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}
const port = process.env.PORT || 3001;
app.listen(port, () => console.log("server started"));
