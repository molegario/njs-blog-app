export default function handler(req, res) {

  res.status(200).json({
    // message: 'no valid request to process.'
    contacts: [
      {
        email: 'me@somewhereo.com',
        name: 'Mike The O',
        message: 'I did something',
      }
    ],
  });
}