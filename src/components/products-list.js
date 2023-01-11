export default function ProductsList({ products }) {
  return (
    <>
      {products.map((product) => {
        return (
          <aside key={product.id}>
            <img src={product.thumbnail} />
            <h3>{product.title}</h3>
          </aside>
        );
      })}
    </>
  );
}
