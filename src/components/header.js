import React from 'react'
const Header = ({ title, color }) => {
    return <h1 style={{ color: color ? color : 'white' }}>
        {title ? title : 'Nada'} </h1>
}

export default Header;