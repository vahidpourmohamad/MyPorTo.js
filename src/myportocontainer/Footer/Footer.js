import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer-Container">
      <div className="Footer-parent">
        <div
          className="Footer-Card"
          style={{
            fontFamily: "Poppins Regular",
            fontSize: "15px",
            width: "20%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "20px" }}>Call !</div>
            <div>+989151101602</div>
          </div>
        </div>

        <div
          className="Footer-Card"
          style={{
            fontFamily: "Poppins Bold",
            fontSize: "20px",
            width: "60%",
            textAlign: "center",
          }}
        >
          Designed By Love Via David PoormoHamad Shandiz
        </div>
        <div
          className="Footer-Card"
          style={{
            fontFamily: "Poppins Regular",
            fontSize: "15px",
            width: "20%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "20px" }}>Email</div>
            <div>VahidPoormohamd2@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}
