import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image"; // Imageコンポーネントをインポート

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
            {/* <img>タグを<Image>コンポーネントに置き換え */}
            <Image src="/GraphiumIcon.png" alt="Graphium Icon" id="HeaderIcon" width={40} height={40} /> {/* widthとheightは適切な値に調整してください */}
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
