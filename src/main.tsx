import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  // <Provider store={}>
  <App />
  // </Provider>
  // </StrictMode>,
);
