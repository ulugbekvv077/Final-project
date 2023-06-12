import React, { useContext } from 'react';
import './AdminPage.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  DeleteDataFunc,
  GetFunc,
  PostFunc,
  updateProduct,
} from '../../module/api.js';
import { Link } from 'react-router-dom';
import { Context } from '../../context';

const Admin_Pop = ({ param }) => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [hol, setHol] = useState('(yumshoq muqova)');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState(0);
  const [but, setBut] = useState("Savatchaga qo'shish");
  const [category, setCategory] = useState('');
  const [info3, setinfo3] = useState('');
  const [year, setYear] = useState(0);
  const [desc, setAbout] = useState('');
  const [categoriy, setCategoriy] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [popup, setPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    GetFunc('/products').then((data) => {
      setProducts(data);
    });
    if (!localStorage.getItem('token')) {
      navigate('/');
    }
  }, []);

  const Delete = (id) => {
    DeleteDataFunc(`/products/${id}`)
      .then(() => {
        window.location.reload();
      })
      .catch((error) => console.error('Xato', error));
  };

  const show_pop = (param) => {
    setPopup(param);
  };
  const Post = (param) => {
    const data = {
      img: imageUrl,
      title: productName,
      hol: hol,
      author: author,
      price: price,
      but: but,
      category: category,
      info1: 'Talabaning odoblari',
      info2: '21 000 uzs',
      info3: info3,
      yili: year,
      aboutbook: 'Kitob haqida',
      desc: desc,
      categoriy: categoriy,
    };

    PostFunc('/products', data)
      .then(() => {
        window.location.reload();
        console.log(data);
      })
      .catch((error) => console.error('Xatolik', error));
  };
  const { handleClick2 } = useContext(Context);
  return (
    <div>
      <div className='container'>
        <div className='admin-paragraf'>
          <h1>Bu faqat admin uchun!!!</h1>
        </div>
        <div className='mahsulot-nomi'>
          <h3>Mahsulot nomi</h3>
          <input
            className='ion'
            onChange={(event) => setProductName(event.target.value)}
            type='text'
            placeholder='Mahsulot nomi'
          />
          <h3>Mahsulot muallifi</h3>
          <input
            className='ion'
            onChange={(event) => setAuthor(event.target.value)}
            type='text'
            placeholder='Mahsulot muallifi'
          />
          <h3>Mahsulot narxi</h3>
          <input
            className='ion'
            onChange={(event) => setPrice(event.target.value)}
            type='text'
            placeholder='0'
          />
          <h3>Mahsulot kategotiyasi</h3>
          <input
            className='ion'
            onChange={(event) => setCategory(event.target.value)}
            type='text'
            placeholder='Mahsulot kategoriyasini kiriting'
          />
          <h3>Rasm uchun joy</h3>
          <input
            className='ion'
            onChange={(event) => setImageUrl(event.target.value)}
            type='url'
            placeholder='Rasm uchun joy'
          />
          <br />
          <div className='inp-btn'>
            <button onClick={() => Post(false)}>Add</button>
          </div>
        </div>
      </div>

      <div className='back'>
        <div className='container'>
          <h3 className='display-4'>Maxsulot qo'shish</h3>
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>№</th>
                <th scope='col'>Nomi</th>
                <th scope='col'>Categoriyasi</th>
                <th scope='col'>Narxi</th>
                <th scope='col'>O'zgartirish</th>
                <th scope='col'>O'chirish</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => {
                return (
                  <React.Fragment key={product.id}>
                    <tr>
                      <th scope='row'> {index + 1} </th>
                      <td> {product.title} </td>
                      <td> {product.category} </td>
                      <td>{product.price}</td>
                      <td>
                        <Link
                          className='btn btn-success'
                          onClick={() => updateProduct(product.id)}
                          to={`/update/${product.id}`}
                        >
                          Edit
                        </Link>
                      </td>
                      <td>
                        <button
                          className='btn btn-primary dil'
                          onClick={() => Delete(product.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
          <button
            className='loggg'
            onClick={() => {
              localStorage.removeItem('token');
              window.location.reload();
            }}
          >
            LogOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin_Pop;
