export default function handler(req, res) {
  res.status(200).json({
    post: {
      title: 'Blog title',
      blogcontent: 'I wrote something today.'
    }
  })
}