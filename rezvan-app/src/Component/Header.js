
import React from 'react'
import '../App.css'
import search from './search.png'
import call from './call.png'
import more from './more.png'

class Header extends React.Component {
    render () {
        console.log('email:', this.props.email)
        return (
            <div className = 'header'>
                <div className = 'd1'>
                    <img src={this.props.url_profile} />
                </div>
                
                <div className = 'd2'>
                    <span>{this.props.email}</span>
                    <span>last seen resently!</span>
                </div>
                
                <div className = 'icon'>
                    <img src={search}  />
                    <img src={call}  />
                    <img src={more}  />
                </div>
                
            </div>
        )
    }
}

export default Header