
import { connect } from 'react-redux'
import Footer from '../Component/Footer'

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

const FooterContainer = connect(
  mapDispatchToProps
)(Footer)

export default FooterContainer