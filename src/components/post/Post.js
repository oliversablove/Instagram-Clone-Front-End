import React, { Component, Fragment } from 'react'

// class Post extends Component {
//   constructor (props)
//     super(props)
//   <Fragment>
//     <main className="post">
//       <section className="stream">
//         <video ref="video" id="video" width="100%" height="300" autoPlay></video>
//       </section>
//     </main>
//   </Fragment>
// }

class Post extends Component {
  constructor (props) {
    super(props)

    this.state = {
      video: {}
    }
  }

  componentDidMount () {
    console.log(this.state.video)
  }

  render () {
    return (
      <Fragment>
        <main className="post">
          <h3>New Image</h3>
          <section className="stream">
            <video id="video" width="100%" height="300" autoPlay></video>
          </section>
        </main>
      </Fragment>
    )
  }
}

export default Post
