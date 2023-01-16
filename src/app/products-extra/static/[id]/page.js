import Link from "next/link";

async function getProduct(id) {
  const response = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "force-cache",
  });
  const data = await response.json();
  return data;
}

export async function generateStaticParams() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  const products = data.products;
  const paths = products.map((product) => ({ id: String(product.id) }));

  return paths;
}

async function ProductDetailStaticIndex({ params }) {
  const product = await getProduct(params.id);
  return (
    <main>
      <h1>{product.title}</h1>
      <article>
        <aside>
          <p>
            <Link href="/products-extra/static">Products</Link> / {product.brand} /{" "}
            {product.category}
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

export async function getStaticPaths() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  const products = data.products;
  const paths = products.map((product) => ({
    params: { id: String(product.id) },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default ProductDetailStaticIndex;
