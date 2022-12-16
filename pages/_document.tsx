import Document, { Html, Main, NextScript, Head } from "next/document";

class MyDocument extends Document {
  // static async getInitialProps(ctx: any) {}

  render() {
    return (
      <Html lang="en" dir="ltr">
        <Head></Head>
        <body dir="ltr">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
