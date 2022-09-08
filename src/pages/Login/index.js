import React, { useEffect, useState } from "react";
import "./styles.css";
const Text = () => {
  useEffect(() => {
    console.log("Renderizei o texto");
    // Executa a função caso o componente seja desmontado
    return () => {
      console.log("O componente saiu da tela");
    };
  }, []);
  return <h1>Texto</h1>;
};

function Login() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  // useEffect(callback, param2)
  // Param2 = [] => O callback será executado somente na renderizado do component
  // Param2 = VAZIO => O callback será executado quando qualquer alteração no component ocorrer
  // Param2 = [var1, var2,...] => O callback será executado quando a variável for alterada
  useEffect(() => {
    console.log("Executa quando o componente é renderizado");
    setTimeout(() => {
      setLoading(!loading);
    }, 2000);
  }, []);
  useEffect(() => {
    console.log("Executa quando qualquer alteração na tela ocorrer");
  });
  useEffect(() => {
    console.log(loading);
    setCount(count + 10);
  }, [loading]);

  return (
    <div>
      <h1>Login</h1>
      <span>{count}</span>
      {count > 5 ? <Text /> : ""}
      {loading ? <h1>Carregando...</h1> : ""}
      <br />
      <button onClick={() => setCount(count - 1)}>Decrementar</button>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}
export default Login;
