
import send from './iconfinder_send.png' 
import React from 'react'
import '../App.css'
import { sendNewMessage } from '../action/conversation'
class Footer extends React.Component {
    constructor () {
        super()
        this.state = {
          newMessage: ''
        }
    }
    
    handleSend () {
        this.props.dispatch(sendNewMessage(this.state.newMessage))
        this.setState({ newMessage: '' })
    }
    render() {
        return (
            <div className = 'footer'>
                <input 
                name='newMessage'
                value={this.state.newMessage}
                placeholder='write a message...' 
                onChange={(e) => this.setState({ newMessage: e.target.value })}/>
                <img src={send} onClick={() => this.handleSend()}/>
            </div>
        )
    }
}
export default Footer