import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const url = 'https://r-contact-backend.onrender.com/api/users';
const Context = createContext();
const ContextProvider = ({ children }) => {
  const ip = 'http://localhost:9000';
  const [img, setImg] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [author, setAuthor] = useState('');
  const [fio, setFio] = useState(useState(''));
  const [phone_number, setPhone_number] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [region, setRegion] = useState('');
  const [array, setArray] = useState([]);
  const [search, setSearch] = useState('');

  //   GET METOD
  useEffect(() => {
    axios.get(url).then((res) => {
      setArray(res.data);
    });
  }, []);

  //  console.log(array);

  //  METOD PATCH
  const updateProduct = async (id) => {
    await axios.patch(`http://localhost:9000/products/${id}`, {
      id: id,
      img: img,
      title: title,
      price: price,
      author: author,
    });
    window.location.reload();
  };

  //  METHOD POST

  // data search

  const dataSearch = array.filter((item) => {
    return item.fio.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <Context.Provider
      value={{
        array,
        fio,
        setFio,
        phone_number,
        setPhone_number,
        region,
        setRegion,
        email,
        setEmail,
        category,
        setCategory,
        updateProduct,
        ip,
        dataSearch,
        email,
        setEmail,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
