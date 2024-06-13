import React from 'react'
import "./Navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
function Navbar() {

    return (
        <div className="navbar">
            <div className="wepper">
                <div className="left">
                    <div className="item" ></div>
                    <div className="item"><Link className='link' to={""}>LOGO</Link></div>
                    <div className="item"><Link className='link' to={""}>Man</Link></div>
                    <div className="item"><Link className='link' to={""}>Women</Link></div>
                    <div className="item"><Link className='link' to={""}>Children</Link></div>
                    <div className="item"><Link className='link' to={""}>Accessories</Link></div>
                </div>
                <div className="center">
                    <div className="item"><Link className='link' to={""}><span>GIFTTY</span></Link></div>
                </div>
                <div className="right">
                    <div className="item"><Link className='link' to={""}>HomePage</Link></div>
                    <div className="item"><Link className='link' to={""}>About</Link></div>
                    <div className="item"><Link className='link' to={""}>Contact</Link></div>
                    <div className="item"><Link className='link' to={""}>Stores</Link></div>
                    <div className="icons">
                        <div className="icon"><SearchIcon /></div>
                        <div className="icon"><PersonIcon /></div>
                        <div className="icon"><FavoriteIcon /></div>
                        <div className="cardIcon"><ShoppingCartIcon />
                            <span>0</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    )
}

export default Navbar