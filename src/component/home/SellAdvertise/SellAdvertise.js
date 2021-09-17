import React, { Component } from 'react';

class SellAdvertise extends Component {
    render() {
        return (
            <div>
                <a className="advertise__info--link" href="/about/1">
                <img src={this.props.image} className="advertise__image" alt="img" />
                <p className="advertise__info">
                    <b>item:{this.props.item}</b><br />
                    <b>Brand:{this.props.brand}</b><br />
                    <b>price:{this.props.price}</b>
                </p>
                </a>
            </div>
        );
    }
}

export default SellAdvertise;