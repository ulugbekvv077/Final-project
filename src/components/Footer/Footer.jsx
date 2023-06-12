import React from "react";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="Foot-content">
        <div className="container desan">
          <div className="foot-contact">
            <h4>Ma'lumot</h4>
            <h6>Biz haqimizda</h6>
            <h6>Qanday harid qilinadi?</h6>
            <h6>Ommaviy oferta</h6>
            <h6>Fillial va dilerlar</h6>
            <h6>Yetkazib berish</h6>
          </div>
          <div className="foot-desc">
            <h3>Biz bilan bog'laning</h3>
            <div className="foot-a">
              <div className="d-flex">
                <i className="fa-solid fa-phone fa-2x"></i>
              </div>
              <div className="afer">
                <a href="tel:+998-99-891-03-24">+998-99-891-03-24</a>
                <a href="tel:+998-71-230-00-50">+998-71-230-00-50</a>
              </div>
            </div>
            <div className="foot-email">
              <i className="fa-solid fa-envelope fa-2x"></i>
              <a href="info@book.uz">info@book.uz</a>
            </div>
            <div className="foot-locat">
              <i className="fa-sharp fa-solid fa-location-dot fa-2x"></i>
              <a href="https://www.google.jo/maps/place/Book.uz/@41.2916051,69.2084312,17.36z/data=!4m10!1m2!2m1!1schilonzor-8+Qatortol+kochasi+60!3m6!1s0x38ae8bbe6b94a013:0xae53e1ed1e9e78ba!8m2!3d41.2921151!4d69.2114221!15sCh9jaGlsb256b3ItOCBRYXRvcnRvbCBrb2NoYXNpIDYwWiEiH2NoaWxvbnpvciA4IHFhdG9ydG9sIGtvY2hhc2kgNjCSAQpib29rX3N0b3Jl4AEA!16s%2Fg%2F11r96z9pxg">
                Chilonzor-8, Qatortol ko'chasi 60
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
