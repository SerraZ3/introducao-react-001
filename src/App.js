import "./App.css";
function SuperText() {
  return (
    <div>
      <h1>Texto aleatório</h1>
      <h2>Outro texto</h2>
    </div>
  );
}
// COMPONENT REACT
// Component = Função que retorna um JSX
function App() {
  // Comentário
  /* Comentário */
  let variavel = "texto";
  const objeto = { nome: "Roberto", sobrenome: "Souza" };
  const lista = ["Arroz", "Feijão", "Batata", "Biscoito"];
  const style = {
    color: "blue",
    backgroundColor: "red",
    height: "300px",
    width: 300,
    fontSize: "3rem",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  };
  return (
    <div>
      {/* Comentáriro no jsx */}
      <h1 style={style}>Hello World</h1>
      <h1 style={{ color: "green", backgroundColor: "blue" }}>{variavel}</h1>
      <h1 id="h1-3">{objeto.nome}</h1>
      <h1 className="h1-4">{lista[0]}</h1>
      <div>
        <ul>
          {lista.map((item, idx) => {
            return <li key={idx}>{item}</li>;
          })}
          {/* <li>{lista[0]}</li> */}
        </ul>
      </div>
      <div>
        <SuperText />
        <SuperText />
        <SuperText />
        <SuperText />
        <SuperText />
        <SuperText />
        <SuperText />
      </div>
    </div>
  );
}

export default App;
