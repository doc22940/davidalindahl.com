import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/mountain-avatar.png'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="www.davidalindahl.com" className="image avatar"><img src={avatar} alt="an avatar picture of me backpacking in the mountains" /></a>
                    <h1><strong id="myName">DAVID A. LINDAHL</strong>
                    <ul>
                        <li>Front End/UI Developer</li>
                        <li>Outdoor Adventurer</li>
                        <li>Design Enthusiast</li>
                        <li>Photographer</li>
                    </ul>
                    </h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
