import React from "react";
import Item from "../../components/Cart/Cart.jsx";
import allproducts from "../../components/Products/Products";

const Korzinka = () => {
  return (
    <div>
      {allproducts.productData.map((item, index) => {
        return (
          <Item
            img={item.img}
            title={item.title}
            desc={item.desc}
            price={item.price}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Korzinka;
