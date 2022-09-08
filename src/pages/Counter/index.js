import React, { useState } from "react";
const Counter = () => {
  // Criando uma váriavel de estado (state)
  // Com essa variavel é possivel monitorar a alteração do seu valor e executar gatilhos
  // hook
  const [contador, setContador] = useState(0);
  const [loading, setLoading] = useState(true);

  const decrementar = () => {
    console.log("Decrementar");
    setContador(contador - 1);
  };
  const incrementar = () => {
    console.log("Incrementar");
    setContador(contador + 1);
  };
  return loading ? (
    <h1
      onClick={() => {
        setLoading(!loading);
      }}
    >
      Carregando...
    </h1>
  ) : (
    <div>
      <h1>Contador</h1>
      <span>{contador}</span>
      {contador > 10 ? <h1>O valor é maior que 10</h1> : ""}
      <br />
      <button onClick={decrementar}>Decrementar</button>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};
export default Counter;
