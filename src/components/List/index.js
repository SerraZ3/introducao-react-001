function List(props) {
  const { itens } = props;
  return (
    <ul>
      {itens.map((item, idx) => {
        return (
          <li key={idx}>
            <a href={item.url}>{item.title}</a>
          </li>
        );
      })}
    </ul>
  );
}
export default List;
