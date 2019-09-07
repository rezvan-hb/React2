
import send from './iconfinder_send.png' 
import React from 'react'
import '../App.css'
import { sendNewMessage } from '../action/conversation'
import {getUserName} from '../action/conversation'
import axios from 'axios'

class Footer extends React.Component {
    constructor () {
        super()
        this.state = {
          token: window.localStorage.getItem('token'),
          newMessage: ''
        }
    }
    
    handleSend (e) {

        let fdata = new FormData()
        fdata.append('token', this.state.token)
        fdata.append('conversation_id', 466 )
        fdata.append('text', this.state.newMessage)

        axios.post('https://api.paywith.click/conversation/create/', fdata) 
            .then((response) => {
                console.log('response:', response)
            })
            .catch(function (error) {
              console.log(error)
            })
        this.props.dispatch(sendNewMessage(this.state.newMessage))
        this.props.dispatch(getUserName('',this.state.newMessage))
        this.setState({ newMessage: '' })
    }
    render() {
        console.log('footer_props :::::::', this.props )
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