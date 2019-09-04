
import { connect } from 'react-redux'
import Conversation from '../Component/Conversation'

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

const mapStateToProps =  (state) => ({
  conversationList: state.conversationList
})

export default connect(mapStateToProps, mapDispatchToProps)(Conversation)