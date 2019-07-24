import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
// import Header from './components/header/Header'
// import Footer from './components/footer/Footer'
import Layout from './components/layout/Layout'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import CreatePost from './components/post/CreatePost'
import Feed from './components/feed/Feed'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: null
    }
  }

   setUser = user => {
     this.setState({ user })
     console.log(this.state)
   }

   clearUser = () => this.setState({ user: null })

   render () {
     const { user } = this.state

     return (
       <Layout user={user}>
         <Route path='/sign-up' render={() => (
           <SignUp setUser={this.setUser} />
         )} />
         <Route path='/sign-in' render={() => (
           <SignIn setUser={this.setUser} />
         )} />
         <AuthenticatedRoute user={user} path='/sign-out' render={() => (
           <SignOut clearUser={this.clearUser} user={user} />
         )} />
         <AuthenticatedRoute user={user} path='/change-password' render={() => (
           <ChangePassword user={user} />
         )} />
         <AuthenticatedRoute user={user} path='/new-post' render={() => (
           <CreatePost user={user} />
         )} />
         <AuthenticatedRoute user={user} path='/feed' render={() => (
           <Feed user={user} />
         )} />
       </Layout>
     )
   }
}

// class App extends Component {
//   constructor () {
//     super()
//
//     this.state = {
//       user: null,
//       alerts: []
//     }
//   }
//
//   setUser = user => this.setState({ user })
//
//   clearUser = () => this.setState({ user: null })
//
//   alert = (message, type) => {
//     this.setState({ alerts: [...this.state.alerts, { message, type }] })
//   }
//
//   render () {
//     const { alerts, user } = this.state
//
//     return (
//       <React.Fragment>
//         <Header user={user} />
//         {alerts.map((alert, index) => (
//           <Alert key={index} dismissible variant={alert.type}>
//             <Alert.Heading>
//               {alert.message}
//             </Alert.Heading>
//           </Alert>
//         ))}
//         <main className="container">
//           <Route path='/sign-up' render={() => (
//             <SignUp alert={this.alert} setUser={this.setUser} />
//           )} />
//           <Route path='/sign-in' render={() => (
//             <SignIn alert={this.alert} setUser={this.setUser} />
//           )} />
//           <AuthenticatedRoute user={user} path='/sign-out' render={() => (
//             <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
//           )} />
//           <AuthenticatedRoute user={user} path='/change-password' render={() => (
//             <ChangePassword alert={this.alert} user={user} />
//           )} />
//           <AuthenticatedRoute user={user} path='/new-post' render={() => (
//             <Post user={user} />
//           )} />
//         </main>
//         <Feed user={user}/>
//         <Footer user={user}/>
//       </React.Fragment>
//     )
//   }
// }

export default App
