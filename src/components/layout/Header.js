import React from 'react'

 function Header() {
    return (
        <header style={headerStyle}>
            <h1>How Full Moon Old Are You?</h1>
        </header>
    )
}

const headerStyle={
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

export default Header;