import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom/dist";

const Login = () => {
  const [userName, userNameupdate] = useState("");
  const [password, userPassword] = useState("");

  const usenavigate = useNavigate();

  const ProceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      fetch("http://localhost:9000/register" + userName)
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          // console.log(resp);
          if (Object.keys(resp).length === 0) {
            toast.error("Iltimos loginni togri kiriting: ");
          } else {
            if (resp.password === password) {
              toast.success("Success");
              usenavigate("/");
            } else {
              toast.error("Iltimos mavjud loginni kiriting : ");
            }
          }
        })
        .catch((err) => {
          toast.error("Loginda xato: " + err.message);
        });
    }
  };
  const validate = () => {
    let result = true;
    if (userName === "" || userName === null) {
      result = false;
      toast.warning("Iltimos Loginni Qaydadan Kiriting");
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("Iltimos Passwordni Qaydadan Kiriting");
    }
    return result;
  };
  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form onSubmit={ProceedLogin}>
            <div className="c">
              <div className="card-header">
                <h2>Foydalanuvchi Logini</h2>
              </div>
              <div className="card-body">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Userning Ismi<span className="errmsg">*</span>
                    </label>
                    <input type="email" className="from-control"></input>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group ukaa d-flex">
                    <label>
                      Password<span className="errmsg">*</span>
                    </label>
                    <input type="password" className="form-control"></input>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-primary">
                  Kirish
                </button>
                <Link className="btn btn-success" to={"/registration"}>
                  Ro'yxatdan o'tish
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
