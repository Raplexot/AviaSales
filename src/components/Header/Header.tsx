import React, { FC } from 'react'
import logo from '/home/smiss-user46/Avia-Sales/my-app/src/images/plane.png'
const Header: FC = () => {
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
        />
    )
}

export default Header
