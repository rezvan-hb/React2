
import React from 'react'
import '../App.css'
import { Link } from "react-router-dom"
import telegramicon from './iconfinder_telegramm_2691273.png'
import validate from '../validiation/validateFunction.js'
import axios from 'axios'
import { withRouter } from 'react-router'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '', password: '', clicked: true , 
      error: {
        email: null,
        password: null,
      }
    }
  }

  handelChange (e) {
    var name = e.target.name
    console.log('name:', e.target.name)
    this.setState( {
      [name]: e.target.value
      }
    )
    console.log('state:', this.state[name])
  }
  
  handleRequest () {
    // var emailError = validate('email', this.state.email)
    // var passwordError = validate('password', this.state.password)
    // this.setState({...this.state, error: {...this.state.error, email:emailError, password: passwordError}})
    
    let error = {
      email : validate('email', this.state.email),
      password : validate('password', this.state.password)
    }
    let valid = true

    this.setState({ error },
      () => {
        Object.values(this.state.error).map((item) => {
          if (item !== null) {
            valid = false
          }
        })
        if (valid) {
          axios.post('https://api.paywith.click/auth/signin/', {
            email: this.state.email,
            password: this.state.password
            })
            .then((response) => {
                window.localStorage.setItem('token', response.data.data.token)
                window.localStorage.setItem('id', response.data.data.profile.id)
                this.props.history.push('/messenger')
            })
            .catch(function (error) {
              console.log('error:',error);
            })
            window.localStorage.getItem('token')
            this.setState({ clicked: !this.state.clicked })
            if (this.state.clicked === true) {
            this.setState({ clicked: false })
            } else {
            this.setState({ clicked: true })
            }
        }
      }
    )
  }

  render () {
    console.log(this.props)
    return (
      <div className='Login'>
        <div className='Container'>
          <img src={telegramicon} className='telegramicon'/>
          <input className='myinput' placeholder='email' name='email' type='email' onChange={(e) => this.handelChange(e)} />
          { this.state.error.email !== null &&
            <p className='error'>{this.state.error.email}</p>
          }
          <input className='myinput' type='password' placeholder='password' name='password' onChange={(e) => this.handelChange(e)} />
          {this.state.error.password !== null &&
            <p className='error'>{this.state.error.password}</p>
          }
          <button className='Login1' onClick = {() => this.handleRequest()} > Login </button>

           <div className='link'>
             <Link className='signupp' to='./signup'> Create new account.</Link>
             <Link className='signupp' to='./signup'> Forgot your password.</Link>
           </div>
        </div>
      </div>
    )
  }
}
export default withRouter(Login)