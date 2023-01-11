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
            <a href="#">Dropdown</a>
            <ul>
              <li>
                <a href="#">Sublink with a long name</a>
              </li>
              <li>
                <a href="#">Short sublink</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <h1>
        Taller <i>malandriner</i> y <u>potente</u>
      </h1>
      <p>
        Aprende Next.js con <mark>las manos sobre el teclado</mark>
      </p>
      <br />
      <p>
        <a href="#">
          <b>Sigue leyendo &rarr;</b>
        </a>
      </p>
    </header>
  );
}