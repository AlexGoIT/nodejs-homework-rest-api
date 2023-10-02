const nodemailer = require("nodemailer");

const { META_USER, META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: META_USER,
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const email = {
  from: META_USER,
  to: email,
  subject: "Test email",
  html: "<p><strong>Test email</strong> from localhost:3000</p>",
};

transport
  .sendMail(email)
  .then(() => console.log("Email success"))
  .catch((err) => console.log(err));
