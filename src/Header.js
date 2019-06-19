import React from 'react';

class Header extends React.Component {
    render(){
        return (
            <div className="header">
            <h1 className="logo">MovieBuster <span className="emoji" role="img" aria-label="glass">🔍</span></h1>
            </div>
        )
    }
}

export default Header