import { Html, Head, Main, NextScript } from 'next/document'
import Footer from '../components/footer'
import Header from '../components/header'

export default function Document() {
  return (
    <Html lang="en" color-mode="user">
      <Head />
      <body>
        <Header></Header>
        <Main />
        <NextScript />
        <Footer></Footer>
      </body>
    </Html>
  )
}
