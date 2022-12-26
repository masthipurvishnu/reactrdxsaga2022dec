import React from "react";

import logo from './logo.svg';
class Header extends React.Component {

    render() {

        return (
            <>
                <header className='App-header'>
                    <div style={{ textAlign: 'left', paddingTop: '20px' }}>
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <div>

                    </div>
                </header>
            </>
        )
    }
}
export default Header