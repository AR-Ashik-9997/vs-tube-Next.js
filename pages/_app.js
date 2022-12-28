import Root from "../Components/Layout/Root";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Root>
      <Component {...pageProps} />
    </Root>
  );
}
