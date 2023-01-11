import "../styles/globals.css";

import Footer from "../components/footer";
import Header from "../components/header";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
