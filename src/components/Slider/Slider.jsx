import React, { useState } from 'react'
import "./Slider.scss"
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

function Slider() {
    const [curentSlide, setcurentslide] = useState(0);
    const data = [
        "https://www.shutterstock.com/image-photo/mothers-day-concept-top-view-600nw-2279549289.jpg",
        "https://sewbanana.com/wp-content/uploads/2024/01/Untitled-design-4.jpg",
        "https://housefur.com/wp-content/uploads/2018/12/eco-friendly-gift-wrapping-9249a-600x400.jpg"

    ]
    const prevedSlide = () => {
        setcurentslide(curentSlide === 0 ? 2 : curentSlide - 1);

    };
    const nextSlide = () => {
        setcurentslide(curentSlide === 2 ? 0 : curentSlide + 1);

    };
    return (
        <div className="slider">

            <div className="container" style={{ transform: `translateX(-${curentSlide * 100}vw)` }} >
                <img src={data[0]} alt="" />
                <img src={data[1]} alt="" />
                <img src={data[2]} alt="" />
            </div>
            <div className="icons" >
                <div className="icon" onClick={prevedSlide}>
                    <WestOutlinedIcon />
                </div>
                <div className="icon" onClick={nextSlide}>
                    <EastOutlinedIcon />
                </div>
            </div>
        </div>
    )
}

export default Slider