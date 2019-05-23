const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true })
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

exports.submit = functions.https.onRequest((req, res) => {
  console.log("Function Submitted");

    cors(req, res, () => {
      console.log(req.body);

      const mailOptions = {
        from: req.body.email,
        replyTo: req.body.email,
        to: gmailEmail,
        subject: `${req.body.contactName} made a form submission`,
        text: req.body.message,
        html: `<p>${req.body.message}</p>`
      };

      mailTransport.sendMail(mailOptions);
      return res.status(200).end();
  });
});
