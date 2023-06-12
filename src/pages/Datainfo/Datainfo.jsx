import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../Datainfo/Datainfo.css";
import { useCart } from "react-use-cart";
import axios from "axios";
import { Context } from "../../context";

const Datainfo = () => {
  const { ip } = useContext(Context);
  const [products, setProducts] = useState([]);
  const { addItem, getItem } = useCart();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${ip}/products/${id}`).then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="container">
      <div className="carda">
        <div className="head-useParams">
          <div class="pcPicture">
            <img src={products.img} className="card-img-top" alt="" />
          </div>
          <div className="pcInfo">
            <h3>{products.title}</h3>
            <p>
              <span>Holati:</span> {products.hol}
            </p>
            <p>
              <span>Avtor:</span> {products.author}
            </p>
            <p>
              <span>Narx:</span> {products.price} UZS
            </p>
            <p>
              <span>Yili:</span> {products.yili}
            </p>
            <div className="korzin_info">
              {!getItem(products.id) ? (
                <button className="ces" onClick={() => addItem(products)}>
                  <i className="fa-solid fa-cart-shopping fs"></i>
                  {products.but}
                  </button>
              ) : (
                <Link to={"/Cart"}>
                  <button className="cancelBtn cde">Savatchaga o'tish</button>
                </Link>
              )}
            </div>
          </div>
        </div>
        <div>
          <h2>{products.aboutbook}</h2>
        </div>
        <div className="dataIn">
          <p>{products.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Datainfo;
