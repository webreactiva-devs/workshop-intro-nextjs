import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/">Home</Link>
        <ul>
          <li>
            <Link href="#">Products</Link>
            <ul>
              <li>
                <Link href="/products">List CSR (pages)</Link>
              </li>
              <li>
                <Link href="/products/static">List SSG (pages)</Link>
              </li>
              <li>
                <Link href="/products/server">List SSR (pages)</Link>
              </li>
              <li>
                <Link href="/products/incremental">List ISR (pages)</Link>
              </li>
              <li>
                <Link href="/products-extra">List CSR (app)</Link>
              </li>
              <li>
                <Link href="/products-extra/static">List SSG (app)</Link>
              </li>
              <li>
                <Link href="/products-extra/server">List SSR (app)</Link>
              </li>
              <li>
                <Link href="/products-extra/incremental">List ISR (app)</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/about">About (pages)</Link>
          </li>
          <li>
            <Link href="/about-extra">About (app)</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}