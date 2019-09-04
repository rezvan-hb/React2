import React from 'react'
import '../App.css'
import ConversationContainer from '../contianer/ConversationContainer'
import Chat from './Chat'

class Messenger extends React.Component {
  render () {
    return (
      <div className='Messenger'>
          <ConversationContainer />
          <Chat />
      </div>
    )
  }
}

export default Messenger
