import { Suspense } from "react";
import ProductsList from "../../../components/products-list";
import Loading from "../../loading";

const sleep = async (milliseconds) => {
  await new Promise((resolve) => {
    return setTimeout(resolve, milliseconds);
  });
};

async function getProducts() {
  const response = await fetch("https://dummyjson.com/products", {
    cache: "no-store",
  });
  const data = await response.json();
  await sleep(5000)
  return data.products;
}

async function ProductsExtraStaticIndex() {

  const products = await getProducts()

  return (
    <main>
      <h1>Server products</h1>
      <section>
        <Suspense fallback={<Loading />}>
          <ProductsList products={products}></ProductsList>
        </Suspense>
      </section>
    </main>
  );
}

export default ProductsExtraStaticIndex;
