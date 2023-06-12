import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

const Profile = () => {
  const [cookies, setCookie, removeCookie] = useCookies("user");

  const logout = () => {
    removeCookie("user");
  };

  if (cookies.user) {
    return (
      <>
        <h1>Авторизован</h1>
        <button onClick={logout}>выйти</button>
      </>
    );
  } else {
    return <Link to="/login">Akkauntingizga kiring</Link>;
  }
};

export default Profile;
