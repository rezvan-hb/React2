
import React from 'react'
import '../App.css'
import validate from '../validiation/validateFunction.js'
import axios from 'axios'

class Signup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      ReEnterPassword:'',
      clicked: false,
      error: {
        email: null,
        password: null,
        ReEnterPassword:null,
      }
    }
  }

  handelChange(e) {
    var item = e.target.name
    console.log('name',item)
    this.setState({[item]:e.target.value})
    console.log('name1',this.state[item])
  }

  handleClick() {
    var emailError = validate('email', this.state.email)
    var passwordError = validate('password', this.state.password)
    var conpasswordError = validate('confirmPassword', this.state.ReEnterPassword)
    
    var error={}
    error.email = emailError
    error.password = passwordError
    error.conpass = conpasswordError
    this.setState({error:error})
    if(this.state.password === this.state.ReEnterPassword){
      axios.post('https://api.paywith.click/auth/signup/', {
        email: this.state.email,
        password: this.state.password,
        ReEnterPassword:this.state.ReEnterPassword
      })
        .then(function (response) {
          console.log('response::::::',response);
          // window.localStorage.setItem('token', response.data.data.token)
          // window.localStorage.setItem('id', response.data.data.profile.id)
        })
        .catch(function (error) {
          console.log('error::::::',error);
        })
    } else {
      this.setState({error:'invalid password!'})
    }
  }

  render () {
    return (
      <div className='signup'> 
        <div className='Container1' >
          <div className='text'>
            <span>Sign Up</span>
            <span>Please enter your information.</span>
          </div>

          <div className='SingupInformation'>
            <input type='email' placeholder='email' name='email' onChange={(e) => this.handelChange(e)} />
            
              {this.state.error.email !== null &&
                <p className='error'>{this.state.error.email}</p>
              }
            
            <input type='password' name='password' placeholder='password' onChange={(e) => this.handelChange(e)} />
              {this.state.error.password !== null &&
                <p className='error'>{this.state.error.password}</p>
              }
            <input type='password' name='ReEnterPassword' placeholder='Re-enter password' onChange={(e) => this.handelChange(e)} />
              {this.state.error.ReEnterPassword !== null &&
                <p className='error'>{this.state.error.ReEnterPassword}</p>
              }

              <div className='Birthday'> 
                <h3> Birthday </h3>
                <SelectMonth Month={['Month', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']} />
                <SelectDay Day={['Day', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]} />
                <SelectYear Year={['Year', 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002]} />
              </div>
            <button className='submit1' onClick={() => this.handleClick()}> Sign Up </button>
          </div>
        </div>
      </div>
    )
  }
}

class SelectMonth extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      Month:'January'  
    }
  }
  handelChange1(event){
    this.setState({Month: event.target.Month})
    console.log('Month:::::', this.state.Month)
  }
  render () {
    const selectMonth = this.props.Month.map((item) => <option Month={item} >{item}</option>) 
    return (
      <select className='Date' Month={this.state.Month} onchange={() => this.handelChange1()} > {selectMonth} </select>
    )
  }
}

class SelectYear extends React.Component {
  render () {
      const SelectYear = this.props.Year.map((item) => <option>{item}</option>) 
    return (
      <select className='Date'> {SelectYear} </select>
    )
  }
}

class SelectDay extends React.Component {
  render () {
     const SelectDay = this.props.Day.map((item) => <option>{item}</option>) 
    return (
      <select className='Date' > {SelectDay} </select>
    )
  }
}
export default Signup