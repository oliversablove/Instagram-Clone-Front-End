import React, { Component, Fragment } from 'react'
import { Redirect, Link, withRouter } from 'react-router-dom'

import axios from 'axios'
import apiUrl from '../../apiConfig'
import Button from 'react-bootstrap/Button'

class Post extends Component {
  constructor (props) {
    super(props)

    this.state = {
      post: null,
      error: null,
      deleted: false
    }
  }

  componentDidMount () {
    axios({
      url: `${apiUrl}/posts/${this.props.match.params.id}`,
      method: 'GET',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      .then(res => this.setState({ post: res.data.post, loaded: true }))
      .catch(console.error)
  }

  destroy = () => {
    const { user } = this.props
    axios({
      method: 'DELETE',
      url: apiUrl + '/posts/' + this.props.match.params.id,
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(() => this.setState({ deleted: true }))
      // .catch(console.log('post does not belong to this account'))
      .catch(err => this.setState({ error: err.message }))
  }

  render () {
    const { user } = this.props
    const { post, error, deleted } = this.state
    const ownerButtons = (
      <Fragment>
        <Link to={`/posts/${this.props.match.params.id}/update-post`}>
          <Button className="mr-2">Edit</Button>
        </Link>
        <Button variant="danger" onClick={this.destroy}>Delete</Button>
      </Fragment>
    )

    if (error) {
      return <p>Error: {error}</p>
    }
    if (!post) {
      return <p>Loading...</p>
    }
    if (deleted) {
      return <Redirect to="/posts" />
    }

    return (
      <Fragment>
        <h3>Post Details</h3>
        <h4>Name: {post.name}</h4>
        <p>Description: {post.description}</p>
        <p>Owner: {post.owner}</p>
        {user && user._id === post.owner ? ownerButtons : <p>{user ? '' : 'Sign in to edit your books'}</p>}
      </Fragment>
    )
  }
}

export default withRouter(Post)
