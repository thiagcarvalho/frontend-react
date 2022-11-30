import React from "react";
import { Link } from "react-router-dom";


export default function Menu() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home </Link>{" "}</li>
          <li><Link to="/Usuario">Clientes</Link></li>
          <li><Link to="/Sobre"> Sobre </Link></li>
          <li><Link to="/pessoas"> Pessoas </Link></li>
        </ul>
      </nav>
    </header>
  );
}
