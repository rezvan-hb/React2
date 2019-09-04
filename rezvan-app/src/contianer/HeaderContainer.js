
import Header from '../Component/Header'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    name : state.userName
})

const HeadererContainer = connect(mapStateToProps)(Header)
  
export default HeadererContainer
