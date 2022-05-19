import Document, {
  Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document<{}> {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps | any> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App: any) => (props: any) => sheet.collectStyles(<App {...props} />),
      });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap" rel="stylesheet" />

          <meta charSet="utf-8" />
          <meta name="theme-color" content="#556BD1" />
          <link rel="shortcut icon" href="/favicon-32x32.png" type="image/png" />

          <meta name="application-name" content="Pomodoro App" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="Pomodoro App" />
          <meta name="description" content="Simple Pomodor timer app." />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-TileColor" content="#556BD1" />
          <meta name="msapplication-tap-highlight" content="no" />

          <link rel="apple-touch-icon" href="/favicon-32x32.png" />

          <meta property="og:title" content="Pomodoro App - Simple Pomodor timer app." />
          <meta property="og:description" content="Simple Pomodor timer app." />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Pomodoro App - Simple Pomodor timer app" />
          <meta property="og:image" content="/ogimage.jpg" />
          <meta property="og:image:secure_url" content="/ogimage.jpg" />
          <meta property="og:image:alt" content="Thumbnail" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="900" />
          <meta property="og:image:height" content="600" />

          <meta name="twitter:title" content="Pomodoro App - Simple Pomodor timer app" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="/ogimage.jpg" />
          <meta name="twitter:image:src" content="/ogimage.jpg" />
          <meta name="twitter:image:alt" content="Thumbnail" />
          <meta name="twitter:image:width" content="900" />
          <meta name="twitter:image:height" content="600" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
