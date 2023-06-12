import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { updateProduct } from '../../module/api';

function Update() {
  const { id } = useParams();
  const [img, setImg] = useState(null);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [author, setAuthor] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:9000/products/' + id)
      .then((res) => {
        window.location.replace();
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-secondary text-white p-5'>
        <form
          onSubmit={(event) =>
            updateProduct(event, `/products/${id}`, {
              img,
              title,
              price,
              author,
            })
          }
        >
          <div>
            <label htmlFor='image'>Image:</label>
            <input
              type='file'
              name='image'
              className='form-control'
              placeholder='Image'
              onChange={(event) => setImg(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor='title'>Title:</label>
            <input
              type='text'
              name='title'
              className='form-control'
              placeholder='Enter Title'
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor='author'>Author:</label>
            <input
              type='text'
              name='author'
              className='form-control'
              placeholder='Enter Author'
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor='price'>Price:</label>
            <input
              type='number'
              name='price'
              className='form-control'
              placeholder='Enter Price'
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </div>
          <br />
          <button className='btn btn-info' type='submit'>
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default Update;
