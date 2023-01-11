

async function getProducts() {
  const response = await fetch("https://dummyjson.com/products", {
    next: { revalidate: 10 }
  });
  const data = await response.json();
  return data.products.sort(() => Math.random() - Math.random()).slice(0, 3);
}

async function ProductsExtraStaticIndex() {;

  const products = await getProducts()

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

export default ProductsExtraStaticIndex;
