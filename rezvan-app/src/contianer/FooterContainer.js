
import { connect } from 'react-redux'
import Footer from '../Component/Footer'

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

const mapStateToProps = (state) => ({
  conversation_id : state.conversation_id
})

const FooterContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Footer)

export default FooterContainer