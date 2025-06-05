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
      {/* ここにアクセスカウンターのHTMLタグを埋め込みます */}
      <table border={0} cellSpacing={0} cellPadding={0} className="access-counter">
        <tbody>
          <tr>
            <td align="center">
              <a href="http://www.rays-counter.com/">
                {/* アクセスカウンターの画像も<Image>コンポーネントに置き換え可能ですが、外部URLのためloader設定が必要になる場合があります。
                    今回は警告の対象外なので、そのまま<img>タグを残します。
                    もし最適化したい場合は、next.config.jsでdomains設定やcustom loaderの設定が必要です。
                */}
                <img src="http://www.rays-counter.com/d1298_f6_017/6841afa46c7e5/" alt="アクセスカウンター" />
              </a>
            </td>
          </tr>
          <tr>
            <td align="center" style={{ fontSize: 'xx-small' }}>
              <img src="http://www.rays-counter.com/images/counter_01.gif" />
              <img src="http://www.rays-counter.com/images/counter_02.gif" />
              <img src="http://www.rays-counter.com/images/counter_03.gif" />
              <img src="http://www.rays-counter.com/images/counter_04.gif" />
              <img src="http://www.rays-counter.com/images/counter_05.gif" />
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
