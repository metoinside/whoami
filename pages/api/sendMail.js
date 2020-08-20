const sgMail = require('@sendgrid/mail')

export default async function (req, res) {
  sgMail.setApiKey(
    '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'
  )

  console.log(req.body)

  const { email, name, surname, message, subject } = req.body

  const meMail = 'beratbozkurt1999@gmail.com'

  const content = {
    to: meMail,
    from: meMail,
    subject: `${subject ? subject : 'Siteden Mesaj Var!'}`,
    message: message,
    html:
      'Mail Adresi: ' +
      email +
      '<br>' +
      'Ad Soyad: ' +
      name +
      ' ' +
      surname +
      '<br><br>' +
      message
  }

  try {
    await sgMail.send(content)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Message not sent.')
  }
}
