import Link from "next/link";

function ProductsStaticIndex({products}) {

  return (
    <main>
      <h1>Static products</h1>
      <section>
        {products.map((product) => {
          return (
            <aside key={product.id}>
              <Link href={`/products/static/${product.id}`}>
                <img src={product.thumbnail} />
                <h3>{product.title}</h3>
              </Link>
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
  const products = data.products;

  return {
    props: {
      products
    }
  };
}

export default ProductsStaticIndex;