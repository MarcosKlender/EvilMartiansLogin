import { useState } from "react";
import { LoginPage } from "./pages/LoginPage";
import { SuccessPage } from "./pages/SuccessPage";

export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <SuccessPage onLogout={() => setIsLoggedIn(false)} />
      ) : (
        <LoginPage onLoginSuccess={() => setIsLoggedIn(true)} />
      )}
    </>
  );
}
