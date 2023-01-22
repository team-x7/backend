const nodemailer = require('nodemailer')

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    // host: process.env.SMTP_HOST,
    service: 'gmail',
    port: 2525,
    auth: {
      // user: process.env.SMTP_EMAIL,
      // pass: process.env.SMTP_PASSWORD,
    },
  })
  const message = {
    from: options.from ? options.from : `"X"7 <x7@gmail.com>`,
    to: options.email,
    subject: options.subject,
    text: options.message,
    html: options.html,
  }

  const info = await transporter.sendMail(message)
}
module.exports = sendEmail
