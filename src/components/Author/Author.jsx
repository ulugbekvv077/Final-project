import React, { useEffect, useState } from "react";
import "./Author.css";
import { Link } from "react-router-dom";
import { GetFunc } from "../../module/api";

const Author = () => {
  const [allAuthor, setAllAuthors] = useState([]);
  useEffect(() => {
    GetFunc("/products").then((data) => {
      setAllAuthors(data);
    });
  });
  return (
    <div className="container">
      <div className="row">
        {allAuthor.map((el) => {
          return (
            <React.Fragment key={el.id}>
              <div className="col-3">
                <div className="cardaw">
                  <div className="cardwe" key={el.id}>
                    <img className="seis" src={el.imag} alt="" />
                    <h5>{el.author}</h5>
                    <h5>{el.word}</h5>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Author;
