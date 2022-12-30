import { Provider } from "react-redux";
import Root from "../Components/Layout/Root";
import store from "../redux/store";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Root>
        <Component {...pageProps} />
      </Root>
    </Provider>
  );
}
