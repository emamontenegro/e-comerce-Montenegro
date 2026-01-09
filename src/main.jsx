import { BrowserRouter } from "react-router";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./context/auth/index.jsx";

const basename = import.meta.env.BASE_URL;

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename={basename}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);
