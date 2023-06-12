import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PostFunc } from "./../../module/api";

const Registration = () => {
  const [name, nameChange] = useState("");
  const [password, passwordChange] = useState("");
  const [email, emailChange] = useState("");
  const [phone, phoneChange] = useState("");
  const [country, countryChange] = useState("");
  const [addres, addresChange] = useState("");
  const [gender, genderChange] = useState("erkak");
  const [pass, passChange] = useState("");

  const navigate = useNavigate();

  const isValidate = () => {
    let isproceed = true;
    let errormessage = "Please enter the value in";
    if (email === null || email === "") {
      isproceed = false;
      errormessage += "Username";
    }
    if (!isproceed) {
      toast.error(errormessage);
    }
    return isproceed;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let regobj = { name, password, email, phone, country, addres, gender };
    if (isValidate()) {
      PostFunc("/register", regobj)
        .then((res) => {
          toast.success("Siz muvafaqiyatli royxatdan otiz.");
          navigate("/");
        })
        .catch((err) => {
          toast.error("Failed :" + err.message);
        });
    }
  };
  return (
    <div>
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={handleSubmit}>
          <div className="reg-content">
            <div className="card-header">
              <h1>Ro'yxatdan o'tish</h1>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Ism familiya<span className="errmsg">*</span>
                    </label>
                    <input
                      required
                      value={name}
                      onChange={(e) => nameChange(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Email<span className="errmsg">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => emailChange(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Telefon nomeri<span className="errmsg">*</span>
                    </label>
                    <input
                      required
                      value={phone}
                      onChange={(e) => phoneChange(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Viloyat<span className="errmsg">*</span>
                    </label>
                    <select
                      required
                      value={country}
                      onChange={(e) => countryChange(e.target.value)}
                      className="form-control"
                    >
                      <option value="Andijon">Andijon</option>
                      <option value="Buxoro">Buxoro</option>
                      <option value="Farg'ona">Farg'ona</option>
                      <option value="Jizzax">Jizzax</option>
                      <option value="Namangan">Namangan</option>
                      <option value="Navoiy">Navoiy</option>
                      <option value="Qashqadaryo">Qashqadaryo</option>
                      <option value="Qoraqalpog'iston">Qoraqalpog'iston</option>
                      <option value="Samarqand">Samarqand</option>
                      <option value="Sirdaryo">Sirdaryo</option>
                      <option value="Surxondaryo">Surxondaryo</option>
                      <option value="Toshkent">Toshkent</option>
                      <option value="Xorazm">Xorazm</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Password<span className="errmsg">*</span>
                    </label>
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => passwordChange(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Passwordni tasdiqlang<span className="errmsg">*</span>
                    </label>
                    <input
                      type="password"
                      required
                      value={pass}
                      onChange={(e) => passChange(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Addres</label>
                    {password !== pass ? (
                      <textarea
                        disabled
                        required
                        value={addres}
                        onChange={(e) => addresChange(e.target.value)}
                        className="form-control"
                      ></textarea>
                    ) : (
                      <textarea
                        required
                        value={addres}
                        onChange={(e) => addresChange(e.target.value)}
                        className="form-control"
                      ></textarea>
                    )}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group jisuu">
                    <label>Jinsi:</label>
                    <br></br>
                    <input
                      type="radio"
                      checked={gender === "erkak"}
                      onChange={(e) => genderChange(e.target.value)}
                      name="gender"
                      value="erkak"
                      className="app-check"
                    ></input>
                    <label className="erika">Erkak</label>
                    <input
                      type="radio"
                      checked={gender === "ayol"}
                      onChange={(e) => genderChange(e.target.value)}
                      name="gender"
                      value="ayol"
                      className="app-check"
                    ></input>
                    <label className="erika">Ayol</label>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary primer">
                Registratsiya
              </button>
              <Link to={"/login"}>
                <button type="submit" className="btn btn-success premir">
                  Men ro'yxatdan o'tganman
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
