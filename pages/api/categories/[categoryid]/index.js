export default function handler(req, res) {

  res.status(200).json({
    category: {
      id: 'c11',
      name: 'some topic',
      description: 'describe that something',
    }
  });


}