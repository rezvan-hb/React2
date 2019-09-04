import React from 'react'
import '../App.css'
import imageprofile from './iconfinder_telegramm_2691273.png' 
import { getUserName } from '../action/conversation'

class Conversation extends React.Component {
  render () {
    return (
      <div className='Conversation' onClick={()=> this.props.dispatch(getUserName(this.props.name))}>
        <div className='profileContainer'>
          <img src={imageprofile}  style={{width:'30px'}}/> 
        </div>
        <div className='IdentityContainer'>
          <div className='NameandDateContainer'>
            <span>{this.props.name}</span>
            <span>{this.props.date}</span>
          </div>
          <div className='NameandDateContainer'>
             <span>{this.props.latestMessage}</span>
             <span className='unseenmessage'>{this.props.unseenMessage}</span>
          </div>
        </div>  
      </div>
    )
  }
}
export default Conversation
