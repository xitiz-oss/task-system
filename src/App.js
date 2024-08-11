import AppRouting from "./utils/routing";

import AuthProvider from "react-auth-kit";
import createStore from "react-auth-kit/createStore";

import "./App.css";

function App() {
  const store = createStore({
    authName: "_auth",
    authType: "cookie",
    cookieDomain: window.location.hostname,
    cookieSecure: window.location.protocol === "http:",
  });

  return (
    <AuthProvider store={store}>
      <AppRouting />
    </AuthProvider>
  );
}

export default App;