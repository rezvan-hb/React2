
import { connect } from 'react-redux'
import ConversationList from '../Component/ConversationList'

const mapDispatchToProps = dispatch => ({
    dispatch: dispatch
  })
  
  const mapStateToProps = state => ({
    conversationlist: state.conversationlist
  })
  
  const ConversationListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(ConversationList)
  
export default ConversationListContainer