import React from "react";
import './FeaturedCard.css';

// import book1 from './../../../assets/book-1.png';



function FeaturedCard() {
    return (
        <div className="swiper-slide box">
        <div className="icons">
            <a href="#" className="fas fa-search"></a>
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-eye"></a>
        </div>
        <div className="image">
            {/* <img src={book1} alt="" /> */}
        </div>
        <div className="content">
            <h3>featured books</h3>
            <div className="price">$15.99 <span>$20.99</span></div>
            <a href="#" className="btn">add to cart</a>
        </div>
    </div>
    );
}

export default FeaturedCard;
