
import React from 'react'
import '../App.css'
import imageprofile from './iconfinder_telegramm_2691273.png' 
import search from './search.png'
import call from './call.png'
import more from './more.png'

class Header extends React.Component {
    render () {
        console.log('userName:', this.props)
        return (
            <div className = 'header'>
                <div className = 'd1'>
                    <img src={imageprofile} />
                </div>
                
                <div className = 'd2'>
                    <span>{this.props.userName}</span>
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