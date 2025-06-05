import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";

import "../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div id="layout_wrapper">
        <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
        </Head>
        <header>
          <Link href="/" className="navbar-brand">
            <img src="/GraphiumIcon.png" alt="" id="HeaderIcon" />
            Graphiumのぶろぐ
          </Link>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
      {/* ここにアクセスカウンターのHTMLタグを埋め込みます */}
      <table border="0" cellSpacing="0" cellPadding="0">
        <tbody>
          <tr>
            <td align="center">
              <a href="http://www.rays-counter.com/">
                <img src="http://www.rays-counter.com/d1298_f6_017/6841afa46c7e5/" alt="アクセスカウンター" border="0" />
              </a>
            </td>
          </tr>
          <tr>
            <td align="center" style={{ fontSize: 'xx-small' }}>
              <img src="http://www.rays-counter.com/images/counter_01.gif" border="0" />
              <img src="http://www.rays-counter.com/images/counter_02.gif" border="0" />
              <img src="http://www.rays-counter.com/images/counter_03.gif" border="0" />
              <img src="http://www.rays-counter.com/images/counter_04.gif" border="0" />
              <img src="http://www.rays-counter.com/images/counter_05.gif" border="0" />
            </td>
          </tr>
        </tbody>
      </table>
      <footer>
        <div>
          <p>
            Graphium314
          </p>
        </div>
      </footer>
    </>
  );
}
