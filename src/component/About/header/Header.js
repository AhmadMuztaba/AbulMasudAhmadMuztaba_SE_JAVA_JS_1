import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <>
                <header className="navbar">
                    <div className="navbar__logo">
                        <a className="btn btn--logo" href="/">Brand</a>
                    </div>
                    <div className="mainHeader__option">
                        <div className="mainHeader__option--sellBooks">
                            <a className="mainHeader__option--sellBooks-link" href="/sellitems"><i className="fas fa-dollar-sign"></i>Sell items</a>
                        </div>
                        <div className="mainHeader__option--profile">
                            <div className="mainHeader__option--profile-icon">
                                <a className="mainHeader__option--sellBooks-link" href="/dashboard">
                                    <i className="far fa-user"></i> Dashboard
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
            </>
        );
    }
}

export default Header;