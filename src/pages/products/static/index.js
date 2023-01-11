function ProductsStaticIndex({products}) {

  return (
    <main>
      <h1>Static products</h1>
      <section>
        {products.map((product) => {
          return (
            <aside key={product.id}>
              <img src={product.thumbnail} />
              <h3>{product.title}</h3>
            </aside>
          );
        })}
      </section>
    </main>
  );
}

export async function getStaticProps(context) {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  const products = data.products;

  return {
    props: {
      products
    }
  };
}

export default ProductsStaticIndex;