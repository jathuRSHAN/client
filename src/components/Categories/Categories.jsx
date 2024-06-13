import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://www.picketfenceflorist.net/wp-content/uploads/2021/07/Hero-flower-boquet-2048x1367.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              FLOWERS
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://th.bing.com/th/id/R.6713db87933d84ffb3dd339916fcee8b?rik=3zvEhAITIHvRGA&pid=ImgRaw&r=0"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              HAMPERS
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="https://assets.winni.in/c_limit,dpr_1,fl_progressive,q_80,w_1000/50209_incredible-bamboo-plant-gift.jpeg"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              PLANTS
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://i.etsystatic.com/14040654/r/il/8aa2d8/2311913780/il_300x300.2311913780_6isn.jpg"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  WOOD WORKS GIFT
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://www.thegiftbaskett.com/cdn/shop/products/1p2.jpg?v=1668340161&width=823"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  CARICATURES
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://3.bp.blogspot.com/-clOQbHE41Os/UMw2Lv_RgMI/AAAAAAAAHr0/zM-TciXcl9I/s1600/cake-dessert-2.jpg"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              BARTHDAY CAKES
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
