

async function getProducts() {
  const response = await fetch("https://dummyjson.com/products", {
    cache: "force-cache",
  });
  const data = await response.json();
  return data.products;
}

async function ProductsExtraStaticIndex() {;

  const products = await getProducts()

  return (
    <main>
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
