import React, { Component } from 'react';
import Header from './header/Header.js';
import Carousel from './carousel/carousel.js';
import SellAdvertise from './SellAdvertise/SellAdvertise';

class Home extends Component {
    render() {
        return (<>
            <Header />
            <section className="custom--carousel">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <Carousel text="10% Discount on Kit Viper DDR4 Ram" active="active" image="https://png.pngitem.com/pimgs/s/544-5445211_16gb-kit-viper-steel-ddr4-3200mhz-cl16-steel.png" />
                        <Carousel text="Buy the best Motherboards .Buy 4 Get 1 Free" active="" image="https://www.gigabyte.com/FileUpload/global/news/1647/o201810311449536042.jpg" />
                    </div>
                </div>
                <div className="button__download">
                    <button type="button" className="btn btn-light btn-lg btn-xl button__download--apple"><i className="fi-xnsuxl-apple"></i> Download</button>
                    <button type="button" className="btn btn-primary btn-lg btn-xl button__download--google"><i className="fi-xnsuxl-playstore-solid"></i> Download</button>
                </div>
            </section>
            <section className="advertise">
                <div className="grid">
                  <SellAdvertise image="https://cdn.mos.cms.futurecdn.net/ibovmWt9ud5UTETr9t4XcM.jpg" item="Motherboard" brand="Aorus" price="20000 taka"/>
                  <SellAdvertise image="https://cdn.mos.cms.futurecdn.net/ibovmWt9ud5UTETr9t4XcM.jpg" item="Motherboard" brand="Aorus" price="20000 taka"/>
                  <SellAdvertise image="https://cdn.mos.cms.futurecdn.net/ibovmWt9ud5UTETr9t4XcM.jpg" item="Motherboard" brand="Aorus" price="20000 taka"/>
                  <SellAdvertise image="https://cdn.mos.cms.futurecdn.net/ibovmWt9ud5UTETr9t4XcM.jpg" item="Motherboard" brand="Aorus" price="20000 taka"/>
                  <SellAdvertise image="https://cdn.mos.cms.futurecdn.net/ibovmWt9ud5UTETr9t4XcM.jpg" item="Motherboard" brand="Aorus" price="20000 taka"/>
                  <SellAdvertise image="https://cdn.mos.cms.futurecdn.net/ibovmWt9ud5UTETr9t4XcM.jpg" item="Motherboard" brand="Aorus" price="20000 taka"/>
                </div>
            </section>
        </>
        );
    }
}

export default Home;