
import Header from '../Component/Header'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    url_profile : state.url_profile ,
    email : state.email
})

const HeadererContainer = connect(mapStateToProps)(Header)
  
export default HeadererContainer