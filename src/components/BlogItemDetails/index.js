import {Component} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
    }
    this.setState({blogData: updatedData, isLoading: false})
  }

  render() {
    const {blogData, isLoading} = this.state
    const {imageUrl, avatarUrl, title, content, author} = blogData
    return (
      <div className="main-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="card-container">
            <h1 className="card-heading">{title}</h1>
            <div className="author-container">
              <img src={avatarUrl} className="avatar" alt="avatar" />
              <p className="author-name">{author}</p>
            </div>
            <img src={imageUrl} className="card-image" alt={title} />
            <p className="content">{content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
