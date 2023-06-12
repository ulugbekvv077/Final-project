import "../Navbar/Navbar.css";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context";

function Navbar() {

  return (
    <div>
      <div className="navber">
        <div className="container">
          <div className="Nav-content">
            <Link to={"/"}>
              <div className="nav-gif">
                <img className="yiu" src="https://usagif.com/wp-content/uploads/gifs/book-49.gif" alt="" />
                <p className="bi">Book.uz</p>
              </div>
            </Link>
            <div className="nav-a">
              <i class="fa-solid fa-phone"></i>
              <a href="tel:+998 71 230-00-50">+998 71 230-00-50</a>
            </div>
            <div className="nav-btn">
              <Link to={"/registration"}>
                <button className="btn1">Bog'lanish</button>
              </Link>
            </div>
            <div className="nav-inter">
              <a href="https://t.me/bookuzbekistan">
                <img
                  className="tel"
                  src="https://avatars.mds.yandex.net/i?id=34fe793e6da7b3a011e29b8421eea3d29112c72c-8496275-images-thumbs&n=13"
                  alt=""
                />
              </a>
              <a href="https://www.facebook.com/bookuzbekistan">
                <img
                  className="fac"
                  src="https://avatars.mds.yandex.net/i?id=359402207ae95480867c3e2b2992e7dc07d3669f-9100075-images-thumbs&n=13"
                  alt=""
                />
              </a>
              <a href="https://www.instagram.com/bookuzbekistan/">
                <img
                  className="ins"
                  src="https://avatars.mds.yandex.net/i?id=ac2359e046bb8b10ab726642eb1df27ef529b23c-4518571-images-thumbs&n=13"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <hr className="ht" />
        <div className="container">
          <div className="nav-content">
            <div className="navb-text">
              <Link to={"/books"}>
                <div className="nav-ul d-flex">
                  <li>Kitoblar</li>
                </div>
              </Link>
              <Link to={"/author"}>
                <div className="nav-ul">
                  <li>Mualliflar</li>
                </div>
              </Link>
            </div>
            <div className="navb-icon d-flex">
              <div className="f">
                <i className="fa-sharp fa-regular fa-heart fa-2x"></i>
                <p>Sevimlilar</p>
              </div>
                <Link to={"/Cart"}>
                <div className="f1">
                  <i className="fa-solid fa-cart-shopping fa-2x"></i>
                  <p>Savatcha</p>
                </div>
              </Link>
                <div className="fe">
                  <i className="fa-solid fa-user fa-2x"></i>
                  <p>Profil</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
