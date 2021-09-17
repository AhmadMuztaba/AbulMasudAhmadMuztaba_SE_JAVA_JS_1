import React, { Component } from 'react';
import Header from './header/Header.js';
class About extends Component {
    render() {
        return (
            <>
            <Header/>
                <section className="itemAbout">
                    <div className="itemAbout__info">
                        <div className="itemAbout__info--image">
                            <img className="itemAbout__info--image-pic" src="https://cdn.mos.cms.futurecdn.net/ibovmWt9ud5UTETr9t4XcM.jpg" alt="item"/>
                        </div>
                        <div className="itemAbout__info--allinfo">
                            <div>
                                <b>Itemname:</b>Motherboard<br />
                            </div>
                            <div>
                                <b>  Brand name:</b>Aorus<br />
                            </div>
                            <div>
                                <b>  Price:2000</b><br />
                            </div>
                            <div>
                                <b>  Details:</b>AMD Ryzen 5000/4000G Series <br /> AMD Ryzen 3rd Generation Processors<br />
                                Blazing Fast 2.5GbE LAN <br />
                                Q-Flash Plus Update BIOS<br />
                                Ultra Durable PCIe 4.0 x16 Slot<br />
                            </div>
                            <div>
                                <button className="btn btn-danger buy-sell__button" name="rmbButton">Delete</button>
                                <button href="/sellitems" className="btn btn-primary buy-sell__button" name="rmbButton">Edit</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="itemcomments">
                    <form>
                        <input type="text" name="comment" placeholder="Give a review" autocomplete="off" className="itemcomments--input" />
                        <input type="hidden" name="prd" />
                        <button type="submit" className="btn btn-warning buy-sell__button" name="commentButton">post</button>
                    </form>
                    <div>
                        <div className="itemcomments__comment">
                            <span className="spanclassName"><b>Ahmad : </b></span><b>very good product</b><br />
                        </div>
                    </div>
                </section>
            </>

        );
    }
}

export default About;