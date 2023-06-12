import React, { useContext } from "react";
import "./Admin.css";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [pass, setPass] = React.useState("");
  const navigate = useNavigate();
  const token = "BookComTokenForAdmin";

  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="card-content">
            <div className="card-imag">
              <img
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
            <div className="card-inp">
              <input
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                type="password"
              />
            </div>
            <div className="card-but">
              {pass === "koko" ? (
                <button
                  onClick={() => {
                    navigate("/privateAdmin");
                    localStorage.setItem("token", token);
                  }}
                  type="button"
                >
                  Endi kiring
                </button>
              ) : (
                <button type="button">Parolni kiriting</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
