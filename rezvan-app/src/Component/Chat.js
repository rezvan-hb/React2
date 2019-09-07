import React from 'react'
import '../App.css'
import ChatScreenContainer from '../contianer/ChatScreenContainer'
import HeaderContainer from '../contianer/HeaderContainer'
import FooterContainer from '../contianer/FooterContainer'


export default class Chat extends React.Component{
  render(){
    return (
      <div className = 'Chat'>
        <HeaderContainer />
        <ChatScreenContainer />
        <FooterContainer />
      </div>
    )
  }
}
