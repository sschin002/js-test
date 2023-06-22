//send email
const nodeMailer= require('nodemailer')
const transporter = nodeMailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.net",
    port: 25,
    secure: false,
    auth: {
        user:'sschin920@gmail.com',
        pass :'mkneceqmxbyymmqb',
    }
})
const mailOptions = {
    from: 'sschin920@gmail.com',
    to: 'sachinshrestha630@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was not easy!'
  };
  
const mailer =(mailOption,transporter) => {
    transporter.sendMail(mailOptions,(err,info)=> {
            if (err){
                console.log(err);
            }else {
                console.log(info);
            }
            });
    };
mailer(mailOptions, transporter);

