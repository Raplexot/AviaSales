import React, { FC } from 'react'
import logo from '../../images/plane.png'
import './Header.css'
const Header: FC = () => {
    return (
        <img className='plane' src={logo} alt="logo"/>
    )
}

export default Header
