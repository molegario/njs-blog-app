export default function handler(req, res) {
  res.status(200).json({
    post: {
      id: 'p1',
      title: 'some article',
      content: 'some writing',
    }
  });
}