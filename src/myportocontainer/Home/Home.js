import React from "react";
import "./Home.css";
import Footer from "./Footer/Footer";
import Profilecom from "./profile/profilecom";

export default function Home() {
  return (
    <div className="Home-contariner">
      <div className="Home-parent">
        <Profilecom />
        <Footer />
      </div>
    </div>
  );
}
