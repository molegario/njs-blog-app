export default function handler(req, res) {

  res.status(200).json({
    posts: [
      {
        name: 'History of someone',
        id: 'p11'
      },
      {
        name: 'Maths is Life: A sad sad story',
        id: 'p222'
      }
    ]
  });
}