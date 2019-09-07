import React from 'react'
import '../App.css'
import ConversationListContainer from '../contianer/ConversationListContainer'
import Chat from './Chat'

class Messenger extends React.Component {
  render () {
    return (
      <div className='Messenger'>
          <ConversationListContainer />
          <Chat />
      </div>
    )
  }
}

export default Messenger
