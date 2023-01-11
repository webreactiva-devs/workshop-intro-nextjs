export default function Header() {
  return (
    <header>
      <nav>
        <a href="/">Home</a>
        <ul>
          <li>
            <a href="/about">About (pages)</a>
          </li>
          <li>
            <a href="/about-extra">About Extra (app)</a>
          </li>
          <li>
            <a href="#">Products</a>
            <ul>
              <li>
                <a href="/products">List CSR (pages)</a>
              </li>
              <li>
                <a href="/products-extra">List CSR (app)</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}