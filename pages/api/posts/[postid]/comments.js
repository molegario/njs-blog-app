export default function handler(req, res) {

  res.status(200).json(
    {
      comments: [
        {
          email: 'me@somewhereo.com',
          name: 'Mike The O',
          comment: 'I think this is a good blog post',
        }
      ]
    }
  );


}