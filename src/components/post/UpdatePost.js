import React, { Component, Fragment } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import apiUrl from '../../apiConfig'

class UpdatePost extends Component {
  constructor (props) {
    super(props)

    this.state = {
      post: {
        name: '',
        description: '',
        url: ''
      },
      update: false
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/posts/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ post: {
          ...res.data.post
        }
        })
      })
      .catch(console.error)
  }

  // handleChange = event => {
  //   const updatedField = { [event.target.name]: event.target.value }
  //   const editedPost = Object.assign(this.state.post, updatedField)
  //
  //   this.setState({ post: editedPost })
  // }

  handleChange = event => {
    this.setState({ post:
    {
      ...this.state.post,
      [event.target.name]: event.target.value
    }
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/posts/${this.props.match.params.id}`,
      method: 'PATCH',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      },
      data: { post: this.state.post }
    })
      .then(() => this.setState({ updated: true }))
      .catch(console.error)
      // or
      // .then(() => this.props.history.push(`/posts/${this.state.post._id}`))
      // .then(() => this.props.alert('Post Uplated!', 'success'))
      // .catch(console.error)
  }

  render () {
    const { handleChange, handleSubmit } = this
    const { post, updated } = this.state

    if (updated) {
      return <Redirect to={`/posts/${this.props.match.params.id}`} />
    }

    return (
      <Fragment>
        <h3>Edit Post</h3>
        <Form onSubmit={handleSubmit} className="mt-5">
          <Form.Group controlId="Name">
            <Form.Label>Post Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
              value={post.name}
            />
          </Form.Group>
          <Form.Group controlId="Description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Description"
              name="description"
              onChange={handleChange}
              value={post.description}
            />
          </Form.Group>
          <Form.Group controlId="URL">
            <Form.Label>URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="URL"
              name="url"
              onChange={handleChange}
              value={post.url}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
          Submit
          </Button>
        </Form>
      </Fragment>
    )
  }
}

export default withRouter(UpdatePost)
