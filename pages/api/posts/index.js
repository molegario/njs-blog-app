export default function handler(req, res) {
  res.status(200).json({
    blogs: [
      {
        title: 'Blog title 1',
        blogcontent: 'I wrote something today once.'
      },
      {
        title: 'Blog title 2',
        blogcontent: 'I wrote something today twice.'
      },
      {
        title: 'Blog title 3',
        blogcontent: 'I wrote something today thrice.'
      },
    ]
  })
}