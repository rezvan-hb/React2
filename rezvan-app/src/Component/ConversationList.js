
import React from 'react'
import '../App.css'
import {getConversationlist} from '../action/conversation'
import ConversationContainer from '../contianer/ConversationContainer'
import axios from 'axios'

class ConversationList extends React.Component {
  constructor(){
    super()
    this.state = {
      suggestionUsers:[],
      token: window.localStorage.getItem('token'),
      self_id: window.localStorage.getItem('id'),
      conversation_details :[]
    }
  }

  handleSearch (e) {
    let fdata = new FormData()
    fdata.append('token', this.state.token)
    fdata.append('query', e.target.value)
    fdata.append('size', 4)

    axios.post('https://api.paywith.click/explore/search/contacts/', fdata)
      .then((response) => {
        console.log('suggestionUsers response:', response.data)
        this.setState({ suggestionUsers : response.data.data.users })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  selectcontect(user) {
    var formdata = new FormData()
    formdata.append('token', this.state.token)
    formdata.append('user_id', user.id)

    axios.post('https://api.paywith.click/conversation/', formdata)

      .then((response) => {
        console.log('search response:::::' , response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

    componentDidMount(){
        axios.get('https://api.paywith.click/conversation/', {
        params :{
            'token':this.state.token}
        }
            )
        .then((response) => {
            var conversation_details = response.data.data.conversation_details
            this.props.dispatch(getConversationlist(response.data.data.conversation_details))
            console.log('get conversation_details:', conversation_details)
            this.setState({conversation_details})
        })
        .catch(function (error) {
            console.log(error)
        })
    }

  render () {
    console.log('conversationlist::::::::::::::::::::', this.props.conversationlist)
    return (
        <div className='ConversationListn'> 
          <div>
            {this.props.conversationlist.map( (item , index) => { 
              return( 
                <ConversationContainer  
                  key = {index}
                  self_id = {this.state.self_id}
                  item = {item}
                  unseenMessage = '0' /> 
              )
            })
            }
        
            <input className='searchinput'
                name='search user'
                placeholder ='Search user ... ' 
                onChange = {(e) =>  this.handleSearch(e)} />

              {this.state.suggestionUsers.map( (user, index) => { 
                return (
                  <p onClick = {() => this.selectcontect(user) }
                    key={index}>
                    {user.email}
                  </p>
                )
              })
              }
            </div>
          </div>
    )
  }
}

export default ConversationList