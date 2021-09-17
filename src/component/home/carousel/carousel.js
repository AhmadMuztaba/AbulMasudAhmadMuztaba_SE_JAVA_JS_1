import React, { Component } from 'react';
class Carousel extends Component {
    render() {
        return (
            <>
                <div className={`carousel-item ${this.props.active}`}>
                    <div className="carousel__slide">
                        <p className="carousel__slide--text carousel__slide--text-1">
                            {this.props.text}
                        </p>
                        <div>
                            <img src={this.props.image} className="carousel__slide--image carousel__slide--image-1" alt="" />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default Carousel;