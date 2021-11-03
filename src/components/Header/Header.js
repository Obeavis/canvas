import React from "react";
import { ReactComponent as Flower } from "static/images/icone_flor.svg";
import { ReactComponent as Logo } from "static/images/feliciencia_logo.svg";

const Home = () => {
  return (
    <div className="flex items-center justify-between top-0 bg-secondary h-40">
      <Flower width="17rem" />
      <span className="text-white text-4xl font-extrabold px-5 mr-16">
        CANVAS DE CULTURA DE <br />
        SEGURANÇA PSICOLÓGICA
      </span>
      <Logo className="mr-20" width="7rem" />
    </div>
  );
};

export default Home;
