import Link from "next/link";

async function getProductImageRandom(id) {
  const response = await fetch(`http://localhost:3001/api/product-image-random?id=${id}`);
  const data = await response.json();
  return data.image;
}

function ProductDetailStaticIndex({ product, productImage }) {

  return (
    <main>
      <h1>{product.title}</h1>
      <article>
        <aside>
          <p>
            <Link href="/products/static">Products</Link> / {product.brand} /{" "}
            {product.category}
          </p>
        </aside>
      </article>
      <section>
        <aside>
          <img alt={product.title} src={productImage} height="150" />
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

export async function getStaticProps({ params }) {
  const response = await fetch(`https://dummyjson.com/products/${params.id}`);
  const data = await response.json();
  const product = data;

  const productImage = await getProductImageRandom(product.id);

  return {
    props: {
      product,
      productImage,
    },
  };
}

export async function getStaticPaths() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  const products = data.products;
  const paths = products.map((product) => ({ params: { id: String(product.id) } }));

  return {
    paths,
    fallback: false,
  };
}

export default ProductDetailStaticIndex;
