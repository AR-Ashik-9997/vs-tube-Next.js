import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import Root from "../Components/Layout/Root";
import store from "../redux/store";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
      <Root>
        <Component {...pageProps} />
      </Root>
      </QueryClientProvider>
    </Provider>
  );
}
