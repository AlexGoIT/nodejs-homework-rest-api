const nodemailer = require("nodemailer");

// Error: self-signed certificate in certificate chain
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
//

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

const sendEmail = async (data) => {
  console.log(data);

  const email = { ...data, from: META_USER };

  try {
    await transport.sendMail(email);

    return true;
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendEmail;
