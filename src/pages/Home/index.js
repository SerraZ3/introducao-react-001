import "./styles.css";
import Text from "../../components/Text";
import List from "../../components/List";
import ListProducts from "../../components/ListProducts";
import leiteImg from "../../assets/img/leite.jpg";

function Home() {
  const dropdown = [
    { title: "Categorias", url: "http://google.com" },
    { title: "Produtos", url: "http://yahoo.com" },
    { title: "Mais vendidos", url: "http://facebook.com" },
    { title: "Top 10", url: "http://facebook.com" },
  ];
  const products = [
    {
      title: "Leite Basic",
      urlImg: leiteImg,
      price: "R$ 10,00",
    },
    {
      title: "Leite Premium",
      urlImg: leiteImg,
      price: "R$ 20,00",
    },
    {
      title: "Leite Vegano",
      urlImg: leiteImg,
      price: "R$ 500,00",
    },
  ];
  return (
    <div>
      <h1>Home</h1>
      <Text
        frase="Um texto qualquer"
        descricao="Uma descrição qualquer"
        theme="red"
      />
      <Text frase="O rato roeu a roupa do rei de roma" />
      {/* <List itens={["banana", "uva", "maçã", "abacaxi"]} /> */}
      <List itens={dropdown} />
      <h1>Lista de produtos</h1>
      <ListProducts products={products} />
    </div>
  );
}
export default Home;
