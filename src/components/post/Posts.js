import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'
import apiUrl from '../../apiConfig'

import './Posts.scss'

class Posts extends Component {
  constructor (props) {
    super(props)

    this.state = {
      posts: [],
      loaded: false,
      error: null
    }
  }

  componentDidMount () {
    axios({
      url: `${apiUrl}/posts`,
      method: 'GET',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      .then(res => this.setState({ posts: res.data.posts, loaded: true }))
      .catch(console.error)
  }

  render () {
    const { posts, error, loaded } = this.state

    if (!loaded) {
      return <p>Loading...</p>
    }

    const postsList = posts.map(post => (
      <li className="pL-li" key={post._id}>
        <Link to={`/post/${post._id}`}>{post.name}</Link>
        <br />{post.description}<br />{post.url}
      </li>
    ))

    if (posts.length === 0) {
      return <p>No posts to display</p>
    }

    if (error) {
      return <p>Error: {error}</p>
    }

    return (
      <Fragment>
        <h4>Posts</h4>
        <ul>
          {postsList}
        </ul>
      </Fragment>
    )
  }
}

export default Posts
