
import React from 'react'
import '../App.css'
import axios from 'axios'
import {get_conversation_id} from '../action/conversation'
import {get_message_list} from '../action/conversation'
import {getUserName} from '../action/conversation'

class Conversation extends React.Component {
  getMessage(item, url_profile, email) {
    this.props.dispatch(get_conversation_id(item.id)) 
    this.props.dispatch(getUserName(
      url_profile,
      email))
    
    console.log('conversation_id::::', this.props.item.id)
    
    let fdata = new FormData()
    fdata.append('token', window.localStorage.getItem('token'))
    fdata.append('conversation_id', this.props.item.id )
    fdata.append('size', 50)
    fdata.append('date', (new Date().getTime() / 1000) .toFixed(0) )

    axios.post('https://api.paywith.click/conversation/details/', fdata)
      .then((response) => {
        console.log('response message', response.data.data.messages )
        this.props.dispatch(get_message_list(response.data.data.messages))
      })
      .catch(function (error) {
        console.log('erorr:' , error)
      })
  }

  render () { 
    if (this.props.item.users[0].id.toString() === this.props.self_id ) {
      return (
        <div className='Conversation' onClick = { () => this.getMessage(this.props.item, this.props.item.users[1].avatar_url, this.props.item.users[1].email) } >
          <div className='profileContainer'>
            <img src={this.props.item.users[1].avatar_url}  style={{ width:'45px' , borderRadius:'100%' }}/> 
          </div>
          <div className='IdentityContainer'>
            <div className='NameandDateContainer'>
              <span>{this.props.item.users[1].email}</span>
              <span>{this.props.item.date}</span>
            </div>
            <div className='NameandDateContainer'>
               <span>{this.props.item.latestMessage}</span>
               <span className='unseenmessage'> {this.props.unseenMessage}</span>
            </div>
          </div>  
        </div>
      )
    }
    return (
      <div className='Conversation' onClick = { () => this.getMessage(this.props.item, this.props.item.users[0].avatar_url, this.props.item.users[0].email) } >
        <div className='profileContainer'>
          <img src={this.props.item.users[0].avatar_url}  style={{ width:'45px' , borderRadius:'100%' }}/> 
        </div>
        <div className='IdentityContainer'>
          <div className='NameandDateContainer'>
            <span>{this.props.item.users[0].email}</span>
            <span>{this.props.item.date}</span>
          </div>
          <div className='NameandDateContainer'>
             <span>{this.props.item.latestMessage}</span>
             <span className='unseenmessage'> {this.props.unseenMessage}</span>
          </div>
        </div>  
      </div>
    )
  }
}
export default Conversation