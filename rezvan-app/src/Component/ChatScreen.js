
import React from 'react'
import '../App.css'

export default class ChatScreen extends React.Component{
    render () {
        return (
        <div className='screen'>
            {
            this.props.messageList.map((message, index) => {
                if (message.sender === 1) {
                return (
                    <div key={index} className='sender' ><span>{message.text}</span></div>
                )
                } else {
                return (
                    <div key={index} className='receiver' ><span>{message.text}</span></div>
                )}
            })}
            
        </div>
        )
    }
}

