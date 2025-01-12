const nodemailer = require("nodemailer");
const { USER_EMAIL, USER_PASSWORD } = process.env;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: USER_EMAIL,
    pass: USER_PASSWORD,
  },
});

async function sendEmail() {
  const info = await transporter.sendMail({
    from: USER_EMAIL,
    to: ["email1@test.com", "email2@test.com"],
    subject: "Test email with Nodemailer, Nodejs and Attachments",
    text: "Hello world",
    html: "<b>Hello world?</b><p>Nodemailer with Nodejs</p>",
    attachments: [
      {
        filename: "test.txt",
        path: "C:YOUR_PATH/email-sender/testAttachment.txt",
      },
    ],
  });

  console.log("Message sent: %s", info.messageId);
}

sendEmail().catch(console.error);
