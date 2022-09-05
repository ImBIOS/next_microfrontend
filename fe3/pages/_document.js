import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <script src="http://localhost:3000/build/remoteEntry.js" />
      <script src="http://localhost:3001/build/remoteEntry_2.js" />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
