
import React from 'react'
import '../App.css'
import ConversationContainer from '../contianer/ConversationContainer'
import {createNewConversation} from '../action/conversation'

class ConversationListn extends React.Component {

  constructor(){
    super()
    this.state = {
      convName: ''
    }
  }

  handelClick() {
    this.props.dispatch(createNewConversation(this.state.convName)),
    this.setState = { convName : ''}
  }

  handleSearch (e) {
    
    let fdata = new FormData()
    fdata.append('token', this.state.token)
    fdata.append('query', e.target.value)
    fdata.append('size', 4)

    axios.post('https://api.paywith.click/explore/search/contacts/', fdata)
      .then((response) => {
        console.log('data:', response.data)
        this.setState({ suggestionUsers: response.data.data.users })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render () {
    return (
      <div className='ConversationListn'> 
        <div>
          <input name='newConversation' 
          placeholder ='Add new conversation ... ' 
          value = {this.state.convName}
          onChange = { (e) => { this.setState = {convName: e.target.value} } }/>
          <span 
          onClick = { () => {this.handelClick()} } > + </span>
        </div>

        {this.props.conversationList.map( (item,index) => { return (
          <ConversationContainer  
            key = {index}
            name = {item.name}
            date = {item.date}
            latestMessage = {item.latestMessage}
            unseenMessage = {item.unseenMessage} /> 
        )})
        }
      </div>
    )
  }
}

export default ConversationListn