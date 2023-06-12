import React, { useContext } from "react";
import { Context } from "../context";
const Post = () => {
  const {
    fio,
    setFio,
    phone_number,
    setPhone_number,
    email,
    setEmail,
    category,
    setCategory,
    handleClick,
  } = useContext(Context);
  return (
    <div>
      <form>
        <input
          onChange={(e) => setFio(e.target.value)}
          value={fio}
          placeholder="fio"
        />
        <input
          onChange={(e) => setPhone_number(e.target.value)}
          value={phone_number}
          placeholder="phone"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="email"
        />
        <input
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          placeholder="category"
        />

        <button onClick={handleClick}>Send</button>
      </form>
    </div>
  );
};

export default Post;
