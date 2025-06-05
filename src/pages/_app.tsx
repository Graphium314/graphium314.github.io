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
            <img src="/GraphiumIcon.png" alt="Graphium Icon" id="HeaderIcon" />
            Graphiumのぶろぐ
          </Link>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
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
