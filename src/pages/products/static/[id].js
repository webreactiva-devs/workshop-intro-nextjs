function ProductDetailStaticIndex({ product }) {
  return (
    <main>
      <h1>{product.title}</h1>
      <article>
        <aside>
          <p>
            {product.brand} / {product.category}
          </p>
        </aside>
      </article>
      <section>
        <aside>
          <img alt={product.title} src={product.thumbnail} height="150" />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <header>
            <h2>{product.price}€</h2>
            <p>
              <a href="#">
                <em>Comprar ↗</em>
              </a>
            </p>
          </header>
        </aside>
      </section>
    </main>
  );
}

export async function getStaticProps({params}) {
  const response = await fetch(`https://dummyjson.com/products/${params.id}`);
  const data = await response.json();
  const product = data;

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: 'blocking'
  };
}

export default ProductDetailStaticIndex;