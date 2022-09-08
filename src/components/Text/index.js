import "./styles.css";
function Text(props) {
  const { frase, descricao, theme } = props;
  return (
    <div>
      <h1 className={theme === "red" ? "red" : "blue"}>
        {frase ? frase : "Nenhum variável foi passada"}
      </h1>
      {descricao ? <h2>{descricao}</h2> : ""}
    </div>
  );
}

export default Text;
