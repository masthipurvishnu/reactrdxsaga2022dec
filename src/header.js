import React from "react";

import logo from './logo.svg';
class Header extends React.Component {

    homeHandler = () => {
        console.log('home clicked');
    }
    otherHandler = () => {
        console.log('other clicked');
    }
    render() {

        return (
            <>
                <header className='App-header'>
                    <div style={{ textAlign: 'left', paddingTop: '20px' }}>
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <div>
                        <button onClick={this.homeHandler}>Home</button>
                        <button
                            style={{ margin: '0 5px' }}
                            onClick={this.otherHandler}
                        >Other</button>
                    </div>
                </header>
            </>
        )
    }
}
export default Header