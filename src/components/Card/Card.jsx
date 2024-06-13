import React from 'react'
import "./Card.scss"
import { Link } from 'react-router-dom'

function Card({ item }) {
    return (
        <Link className="link" to={`/product/${item.id}`}>
            <div className="card">
                <div className="img">
                    <img src={item.img} alt="" />
                </div>
                <div className="ditels">
                    <h1>{item.title}</h1>
                    <div className="price">
                        <h3>USD{item.oldprice}</h3>
                        <h3>USD{item.price}</h3>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card