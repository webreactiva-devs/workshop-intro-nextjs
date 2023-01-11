function ProductsIncrementalIndex({ products }) {
  return (
    <main>
      <h1>Incremental products</h1>
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

export async function getStaticProps() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  const products = data.products
    .sort(() => Math.random() - Math.random())
    .slice(0, 3);

  return {
    props: {
      products,
    },
    revalidate: 10
  };
}

export default ProductsIncrementalIndex;
