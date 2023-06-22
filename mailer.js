//send email
const nodeMailer= require('nodemailer')
const transporter = nodeMailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.net",
    port: 25,
    secure: false,
    auth: {
        user:'sschin920@gmail.com',
        pass :'',
    }
})
const mailOptions = {
    from: 'sschin920@gmail.com',
    to: 'gyalwanglama123@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'ksre aayena!'
};
  
const mailer =(mailOption,transporter) => {
    transporter.sendMail(mailOptions);
};
mailer(mailOptions, transporter);

