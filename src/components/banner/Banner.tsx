import React from "react";
import './Banner.css';

import stand from './../../assets/stand.png';
import book1 from './../../assets/trippy.jpg';

function Banner() {
    return (
        <section className="home" id="home">

    <div className="row">

        <div className="content">
            <h3>upto 50% off</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deserunt nostrum accusamus. Nam alias sit necessitatibus, aliquid ex minima at!</p>
            <a href="#" className="btn">shop now</a>
        </div>

        <div className="swiper books-slider">
            <div className="swiper-wrapper">
                <a href="#" className="swiper-slide"><img src={book1} alt="" /></a>
                <a href="#" className="swiper-slide"><img src={book1} alt="" /></a>
                <a href="#" className="swiper-slide"><img src={book1} alt="" /></a>
                {/* <a href="#" className="swiper-slide"><img src={book1} alt="" /></a>
                <a href="#" className="swiper-slide"><img src={book1} alt="" /></a>
                <a href="#" className="swiper-slide"><img src={book1} alt="" /></a> */}
            </div>
            <img src={stand} className="stand" alt="" />
        </div>

    </div>

</section>
);
}

export default Banner;
