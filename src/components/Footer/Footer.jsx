import React from 'react'
import "./Footer.scss"
function Footer() {
    return (
        <div className="Footer">
            <div className="top">
                <div className="col">
                    <h1>Categories</h1>
                    <span>Women</span>
                    <span>Men</span>
                    <span>Shoes</span>
                    <span>Accessories</span>
                    <span>New Arrivals</span>

                </div>
                <div className="col">
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>
                <div className="col">
                    <h1>About</h1>
                    <span>
                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
                        amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
                        ut labore etdolore.
                    </span>

                </div>
                <div className="col">
                    <h1>Contact</h1>
                    <span>
                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
                        amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
                        ut labore etdolore.
                    </span>

                </div>
            </div>
            <div className="bottum">
                <div className="left">
                    <span className="logo">GIFTTY</span>
                    <span className="copyright">
                        © Copyright 2024. All Rights Reserved
                    </span>
                </div>
                <div className="right">
                    <img src="/img/payment.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer