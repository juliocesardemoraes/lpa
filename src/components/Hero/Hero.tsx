import React, { Suspense } from "react";
import IDE from "../IDE/IDE";
import "./Hero.scss";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function Hero() {
  return (
    <Suspense fallback={<div className="loading">Carregando...</div>}>
      <div className="header__container">
        <nav>
          <img className="logo" src="/Logo3.png"></img>
          <h1>JÚLIO MORAES</h1>
        </nav>
        <Spline
          className="spline"
          scene="https://prod.spline.design/IMW-AgFZs3RYFg9s/scene.splinecode"
        />
        <IDE></IDE>
      </div>
    </Suspense>
  );
}
