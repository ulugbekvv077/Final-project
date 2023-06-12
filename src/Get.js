import axios from "axios";
import React, { useContext, useState } from "react";
import { Context } from "../context";

const Get = () => {
  const { array, handleClick2 } = useContext(Context);
  const deletePost = async (id) => {
    axios.delete(`https://r-contact-backend.onrender.com/api/users/${id}`);
  };

  return (
    <div className="d-flex flex-wrap gap-3">
      {array.map((el) => {
        return (
          <div className="cards mt-5" key={el._id}>
            <h1>{el.fio}</h1>
            <h1>{el.id}</h1>
            <h6>{el.email}</h6>
            <h3>{el.phone_number}</h3>
            <button className="btn-1" onClick={() => deletePost(el._id)}>
              delate
            </button>
            <button className="btn-2" onClick={() => handleClick2(el._id)}>
              Patch
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Get;
