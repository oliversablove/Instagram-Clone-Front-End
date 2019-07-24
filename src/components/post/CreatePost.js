import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import axios from 'axios'
import apiUrl from '../../apiConfig'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class CreatePost extends Component {
  constructor (props) {
    super(props)

    this.state = {
      post: {
        name: '',
        description: '',
        url: ''
      },
      createdPostId: null
    }
  }

  handleChange = event => {
    const updatedField = {
      [event.target.name]: event.target.value
    }
    const editedPost = Object.assign(this.state.post, updatedField)

    this.setState({ post: editedPost })
  }

  handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/posts`,
      method: 'POST',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      },
      data: { post: this.state.post }
    })
      .then(res => this.setState({ createdBookId: res.data.post._id }))
      .catch(console.error)
  }

  render () {
    const { createdPostId, post } = this.state
    const { handleChange, handleSubmit } = this

    if (createdPostId) {
      return <Redirect to={`/posts/${createdPostId}`} />
    }

    return (
      <React.Fragment>
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
      </React.Fragment>
    )
  }
}

export default CreatePost
