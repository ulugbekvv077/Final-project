import React, { useContext, useEffect, useState } from 'react';
import Slider from 'react-slick';
import '../Carousel/Carousel.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Context } from '../../context';
import { useCart } from 'react-use-cart';
import { settings } from '../../config/carousel.config';

const Carousel = () => {
  const { ip } = useContext(Context);
  const [products, setProducts] = useState([]);
  const { addItem, getItem, removeItem } = useCart();

  useEffect(() => {
    axios.get(`${ip}/products`).then((res) => {
      setProducts([...res.data]);
    });
  }, []);

  return (
    <div className='container'>
      <div className='back'>
        <div className='paragraf'>
          <h2>Oyning TOP20 kitoblari</h2>
        </div>
        <Slider {...settings}>
          {products.slice(0, 11).map((el) => {
            return (
              <div className='cards'>
                <div className='cardss' key={el.id}>
                  <Link className="a_href" to={`/books/${el.id}`}>
                    <img className='siis' src={el.img} alt='' />
                    <h6>
                      {el.title} <br /> {el.hol}
                    </h6>
                    <p>{el.author}</p>
                    <h5>{el.price} UZS</h5>
                  </Link>
                  {!getItem(el.id) ? (
                    <button className='ces' onClick={() => addItem(el)}>
                      <i className='fa-solid fa-cart-shopping fs'></i>
                      {el.but}
                    </button>
                  ) : (
                    <Link to={'/Cart'}>
                      <button className='cancelBtn cde'>
                        Savatchaga o'tish
                      </button>
                    </Link>
                  )}
                  <div>
                    <i className='fa-regular fa-heart ff'></i>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className='back'>
        <div className='paragraf'>
          <h2>Yangi nashrlar</h2>
        </div>
        <Slider {...settings}>
          {products.slice(11, 21).map((el) => {
            return (
              <div className='cards'>
                <div className='cardss' key={el.id}>
                  <Link className="a_href" to={`/books/${el.id}`}>
                    <img className='siis' src={el.img} alt='' />
                    <h6>
                      {el.title} <br /> {el.hol}
                    </h6>
                    <p>{el.author}</p>
                    <h5>{el.price} UZS</h5>
                  </Link>
                  {!getItem(el.id) ? (
                    <button className='ces' onClick={() => addItem(el)}>
                      <i className='fa-solid fa-cart-shopping fs'></i>
                      {el.but}
                    </button>
                  ) : (
                    <Link to={'/Cart'}>
                      <button className='cancelBtn cde'>
                        Savatchaga o'tish
                      </button>
                    </Link>
                  )}
                  <div>
                    <i className='fa-regular fa-heart ff'></i>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className='back'>
        <div className='paragraf'>
          <h2>Eng ko'p ko'rilganlar</h2>
        </div>
        <Slider {...settings}>
          {products.slice(21, 32).map((el) => {
            return (
              <div className='cards'>
                <div className='cardss' key={el.id}>
                  <Link className="a_href" to={`/books/${el.id}`}>
                    <img className='siis' src={el.img} alt='' />
                    <h6>
                      {el.title} <br /> {el.hol}
                    </h6>
                    <p>{el.author}</p>
                    <h5>{el.price} UZS</h5>
                  </Link>
                  {!getItem(el.id) ? (
                    <button className='ces' onClick={() => addItem(el)}>
                      <i className='fa-solid fa-cart-shopping fs'></i>
                      {el.but}
                    </button>
                  ) : (
                    <Link to={'/Cart'}>
                      <button className='cancelBtn cde'>
                        Savatchaga o'tish
                      </button>
                    </Link>
                  )}
                  <div>
                    <i className='fa-regular fa-heart ff'></i>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className='back'>
        <div className='paragraf'>
          <h2>Jahon adabiyoti</h2>
        </div>
        <Slider {...settings}>
          {products.slice(32).map((el) => {
            return (
              <div className='cards'>
                <div className='cardss' key={el.id}>
                  <Link className="a_href" to={`/books/${el.id}`}>
                    <img className='siis' src={el.img} alt='' />
                    <h6>
                      {el.title} <br /> {el.hol}
                    </h6>
                    <p>{el.author}</p>
                    <h5>{el.price} UZS</h5>
                  </Link>
                  {!getItem(el.id) ? (
                    <button className='ces' onClick={() => addItem(el)}>
                      <i className='fa-solid fa-cart-shopping fs'></i>
                      {el.but}
                    </button>
                  ) : (
                    <Link to={'/Cart'}>
                      <button className='cancelBtn cde'>
                        Savatchaga o'tish
                      </button>
                    </Link>
                  )}
                  <div>
                    <i className='fa-regular fa-heart ff'></i>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
export default Carousel;
