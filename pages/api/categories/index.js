export default function handler(req, res) {
  res.status(200).json({
    categories: [
      {
        name: 'History',
        id: 'c1'
      },
      {
        name: 'Math',
        id: 'c2'
      }
    ]
  });
}