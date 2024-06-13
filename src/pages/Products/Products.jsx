import React from 'react'
import "./Products.scss"
import List from '../../components/List/List'

function Products() {
    return (
        <div className="prodects">

            <div className="top">
                <img src="https://www.giftalove.com/resources/assets/images/banner.jpg" alt="" />
                <div className="dropDown"><h1>Birth day cake Categories</h1><h1>drop down</h1></div>
            </div>
            <div className="bottom">
                <List />
            </div>

        </div>
    )
}

export default Products