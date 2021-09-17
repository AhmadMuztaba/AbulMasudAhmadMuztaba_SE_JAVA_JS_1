import React, { Component } from 'react';
class Header extends Component {
    render() {
        return (
            <header className="navbar">
                <div className="navbar__logo">
                    <a className="btn btn--logo" href="/">Brand</a>
                </div>
                <div className="navbar__option">
                    <div className="navbar--login">
                        <a className="btn btn--login" href="/login">
                            <i className="fas fa-user-plus"></i>
                            login
                        </a>
                    </div>
                    <div className="navbar--signup">
                        <a className="btn btn--signup">
                            <i className="fas fa-user-plus"></i>
                            sign up
                        </a>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;