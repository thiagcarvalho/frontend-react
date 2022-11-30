import React, { useState, useEffect } from "react";
import UsuarioTabela from "./UsuarioTabela";

export default function Component1() {
  const [contador, setContador] = useState(0);
  const [dados, setDados] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    console.log("Requisitando dados por um fetch");
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => setDados(resp));
  }, [url]);

  function incContador() {
    setContador(contador + 1);
  }

  const decrement = function decContador() {
    setContador((contador) => contador - 1);
  };

  useEffect(() => {
    console.log("componentDidUpdate");
  });

  useEffect(() => {
    console.log("componentDidMount");
  }, []);

  return (
    <>
      <div>Componente de exemplo na aula dev</div>
      <p>
        Did you hear that? They've shut down the main reactor. We'll be
        destroyed for sure. This is madness! We're doomed! There'll be no escape
        for the Princess this time. What's that? Artoo! Artoo-Detoo, where are
        you? At last! Where have you been? They're heading in this direction.
      </p>
      <button onClick={incContador}> Incrementar</button>
      <button onClick={decrement}> Decrementar</button>
      <p>{contador}</p>
      {dados.map((item) => {
        return(
        <div key={item.id}>
          <span>{item.name} -- </span>
          <span>{item.email} </span>
        </div>
        );
      })}

      <UsuarioTabela dados={dados} />

    </>
  );
}
