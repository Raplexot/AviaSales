import React from 'react'
import logo from '/home/smiss-user46/Avia-Sales/my-app/src/images/plane.png'
const Header = () => {
    return (
        <img
            style={{
                height: 150,
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: 20,
            }}
            src={logo}
            alt="logo"
        ></img>
    )
}

export default Header
