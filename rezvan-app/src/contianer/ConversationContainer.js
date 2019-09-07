
import { connect } from 'react-redux'
import Conversation from '../Component/Conversation'

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

export default connect(mapDispatchToProps)(Conversation)
