import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, imageUrl, title, avatarUrl, author, topic} = blogDetails
  return (
    <Link to={`/blogs/${id}`} className="link">
      <li className="blog">
        <img src={imageUrl} alt="blog pic" className="image" />
        <div className="text-content">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="author-container">
            <img src={avatarUrl} alt="avatar" className="avatar" />
            <p className="author">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
