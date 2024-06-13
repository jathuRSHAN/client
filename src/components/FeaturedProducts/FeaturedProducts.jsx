import React from 'react'
import "./FeaturedProducts.scss"
import Card from '../Card/Card';

function FeaturedProducts() {
    const data = [
        {
            id: 1,
            img: "https://cdn.shopify.com/s/files/1/0063/6682/2452/products/stylish-bouquet-of-white-and-red-roses_1024x1024.jpg?v=1572126212",
            title: "Wish Upon a Flower",
            oldprice: 13,
            price: 20,
        },
        {
            id: 2,
            img: "https://th.bing.com/th/id/OIP.wZPMP5L9cM8N8dnG6pKNMQHaE8?w=925&h=617&rs=1&pid=ImgDetMain",
            title: "Radiance Personalized Women's Watch",
            oldprice: 19,
            price: 20,
        },
        {
            id: 3,
            img: "https://th.bing.com/th/id/OIP.Feh-qQPMc99-jB1HWLs4eQHaHa?rs=1&pid=ImgDetMain",
            title: "Heavenly Red Velvet Cake (600 Gm)",
            oldprice: 19,
            price: 21,
        },
        {
            id: 4,
            img: "https://www.printgali.com/storage/products/2020-02-08-08-47-39-5e3e75abaa194-1.jpg",
            title: "Personalized Frame",
            oldprice: 15,
            price: 26,
        },
        {
            id: 5,
            img: "https://homafy.com/wp-content/uploads/2021/03/birthday-combo-for-her-1024x1024.jpeg",
            title: "Styling Essentials Personalized Combo",
            oldprice: 13,
            price: 20,
        },
        {
            id: 6,
            img: "https://cdn.igp.com/f_auto,q_auto,t_prodm/products/p-lovely-pink-pentas-plant-with-black-planter-205325-m.jpg",
            title: "Lovely Pink Pentas Plant",
            oldprice: 19,
            price: 20,
        },
        {
            id: 7,
            img: "https://th.bing.com/th/id/OIP.FcWzI6ugmPkzPEYT8C8MpwHaHa?rs=1&pid=ImgDetMain",
            title: "Let The Love Grow Hamper",
            oldprice: 19,
            price: 21,
        },


    ];


    return (
        <div className="featuredProducts">
            <div className="top"><h1>Featured  Products</h1></div>
            <div className="bottom">
                {data.map(item => (<Card item={item} key={item.id} />))}
            </div>

        </div>
    )
}

export default FeaturedProducts