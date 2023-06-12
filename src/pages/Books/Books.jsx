import React, { useEffect, useState } from 'react';
import './Books.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { Context } from '../../context';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';

const Books = () => {
  const { ip } = useContext(Context);
  const [products, setProducts] = useState([]);
  const { addItem, getItem } = useCart();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${ip}/products`).then(({ data }) => setProducts(data));
  }, []);

  console.log(products.title);
  // console.log(products.map(product => product.title))

  return (
    <div>
      <div className='container'>
        <div className='row'>
          {products.map((products) => (
            <React.Fragment key={products.id}>
              <div className='col-3'>
                <div className='cards'>
                  <div className='cardss' key={products.id}>
                    <Link to={`${products.id}`}>
                      <img className='siis' src={products.img} alt='' />
                      <h6>
                        {products.title} <br /> {products.hol}
                      </h6>
                      <p>{products.author}</p>
                      <h5>{products.price} UZS</h5>
                    </Link>
                    {!getItem(products.id) ? (
                      <button className='ces' onClick={() => addItem(products)}>
                        <i className='fa-solid fa-cart-shopping fs'></i>
                        {products.but}
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
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
