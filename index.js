const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "",
  port: 465,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "",
    pass: "",
  },
});

async function sendEmail() {
  const info = await transporter.sendMail({
    from: "",
    to: "",
    subject: "",
    text: "Hello world?",
    html: "<b>Hello world?</b>",
  });

  console.log("Message sent: %s", info.messageId);
}

sendEmail().catch(console.error);
