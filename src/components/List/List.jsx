import React from 'react'
import "./List.scss"
import Card from '../Card/Card';

function List() {
    const data = [
        {
            id: 1,
            img: "https://florasensations.com/wp-content/uploads/2023/12/Creamy-Red-Velvet-Cake.jpg",
            title: "Birthday Special with Red Velvet Cake",
            oldprice: 13,
            price: 20,
        },
        {
            id: 2,
            img: "https://th.bing.com/th/id/OIP.E8AtHgIyHr13o92PHg-svwAAAA?rs=1&pid=ImgDetMain",
            title: "Chocolate Ripple Cake",
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
            img: "https://cdn.igp.com/f_auto,q_auto,t_pnopt9prodlp/products/p-pink-ombre-cake-500-gm--265430-m.jpg",
            title: "Pink Ombre Cake (500 gm)",
            oldprice: 15,
            price: 26,
        },
        {
            id: 5,
            img: "https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-exotic-fruit-fusion-mini-cake-300-gm--240680-m.jpg",
            title: "Exotic Fruit Fusion Mini Cake (300 GM)",
            oldprice: 13,
            price: 20,
        },
        {
            id: 6,
            img: "https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-decadent-dark-chocolate-cake-500-gm--269995-m.jpg",
            title: "Decadent Dark Chocolate Cake (500 gm)",
            oldprice: 19,
            price: 20,
        },
        {
            id: 7,
            img: "https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-happy-birthday-personalized-photo-cake-2-kg--271625-m.jpg",
            title: "Happy Birthday - Personalized Photo Cake",
            oldprice: 19,
            price: 21,
        },
        {
            id: 8,
            img: "https://florasensations.com/wp-content/uploads/2023/12/Creamy-Red-Velvet-Cake.jpg",
            title: "Birthday Special with Red Velvet Cake",
            oldprice: 13,
            price: 20,
        },
        {
            id: 9,
            img: "https://cdn.igp.com/f_auto,q_auto,t_pnopt9prodlp/products/p-pink-ombre-cake-500-gm--265430-m.jpg",
            title: "Pink Ombre Cake (500 gm)",
            oldprice: 15,
            price: 26,
        }
    ];
    return (
        <div className="list">
            {data?.map(item => (<Card item={item} key={item.id} />))}
        </div>
    )
}

export default List