import React, { useContext, useEffect, useState } from "react";
import "../Cart/Cart.css";
import { useCart } from "react-use-cart";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { Context } from "../../context";

const Cart = () => {
  useEffect(() => {
    fetch("http://localhost:9000")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  });
  const {
    fio,
    setFio,
    phone_number,
    setPhone_number,
    region,
    setRegion,
    dataSearch,
    search,
    SearchTetx,
  } = useContext(Context);
  const { email, setEmail, username, setUsername, password, setPassword } =
    useContext(Context);

  let userData = {
    fullName: fio,
    region: region,
    number: phone_number,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const SaveUserDataFunc = () => {
    console.log(userData);
    localStorage.setItem("user-data", JSON.stringify(userData));
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty) return <h1 className="text-center">Sizning savtingiz bo'sh</h1>;
  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12">
          <h5>
            Mahsulot ({totalUniqueItems}) Savatingizdagi mahsulotlar soni (
            {totalItems})
          </h5>
          <table className="table table-light m-0">
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <img className="desa" src={item.img} />
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>Miqdori: {item.quantity}</td>
                    <td>
                      <button
                        className="btn btn-info ms-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <button
                        className="btn btn-info ms-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button
                        className="btn btn-danger ms-2"
                        onClick={() => removeItem(item.id)}
                      >
                        O'chirib tashlash
                      </button>
                      <button className="btn1 swa" onClick={handleOpen}>
                        Rasmiylashtirish
                      </button>
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="child-modal-title"
                        aria-describedby="child-modal-description"
                      >
                        <Box className="boe" sx={{ ...style, width: 700 }}>
                          {/* @todo */}
                          <div className="btn-in">
                            <h4>Bog'lanish</h4>
                            <p>Login tanlang</p>
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="Login tanlang"
                            />
                            <p>Ism</p>
                            <input
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                              type="text"
                              placeholder="Ism Familiyangizni kiriting"
                            />
                            <p>Password</p>
                            <input
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              placeholder="Passvord 5tadan kam bo'lmasin"
                            />
                          </div>
                          <br />
                          <button className="aaa" onClick={SaveUserDataFunc}>
                            Submit
                          </button>
                          <Link to={"/login"}>
                            <button className="aaa1">Login</button>
                          </Link>
                          <button className="dut" onClick={handleClose}>
                            Oynani yopish
                          </button>
                        </Box>
                      </Modal>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-auto my-2 ms-auto">
          <h2>Jami mahsulot narxi : {cartTotal}</h2>
        </div>
        <div className="col-auto">
          <button className="btn btn-danger m-2" onClick={() => emptyCart()}>
            Savatni tozalash
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
