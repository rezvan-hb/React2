
import { connect } from 'react-redux'
import ChatScreen from '../Component/ChatScreen'

const mapStateToProps = state => {
  console.log(state)
  return {
    messageList : state.messageList,
  }
}
const ChatScreenContainer = connect(mapStateToProps)(ChatScreen)

export default ChatScreenContainer