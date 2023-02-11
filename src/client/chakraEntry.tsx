import { ChakraProvider, createCookieStorageManager } from "@chakra-ui/react";
import { StrictMode } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { App } from "components/App";
import { theme } from "theme";

import type { createUniversalStore } from "store";

function Root({ store }: { store: ReturnType<typeof createUniversalStore> }) {
  const cookieStore = createCookieStorageManager("chakra-ui-color-mode", store.getState().server.cookie.data);

  return (
    <StrictMode>
      <ChakraProvider resetCSS theme={theme} colorModeManager={cookieStore}>
        <Provider store={store}>
          <Router>
            <HelmetProvider>
              <App />
            </HelmetProvider>
          </Router>
        </Provider>
      </ChakraProvider>
    </StrictMode>
  );
}

export { Root };
