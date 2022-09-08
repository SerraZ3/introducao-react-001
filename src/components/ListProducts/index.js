const ItemProduct = (props) => {
  const { product } = props;
  return (
    <div>
      <h2>{product.title}</h2>
      {/* <img src={require("../../assets/img/leite.jpg")} /> */}
      <img src={product.urlImg} />
      <span>{product.price}</span>
    </div>
  );
};
const ListProducts = (props) => {
  const { products } = props;
  return (
    <div style={{
      display: "flex"
    }}>
      {products.map((product, idx) => {
        return <ItemProduct product={product} />;
      })}
    </div>
  );
};
export default ListProducts;
