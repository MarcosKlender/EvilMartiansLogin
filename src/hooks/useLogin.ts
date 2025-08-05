import { useState } from "react";

export function useLogin() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string): Promise<boolean> => {
    setError(null);
    setLoading(true);

    try {
      await new Promise((res) => setTimeout(res, 1000));

      // Simulate a 500 error randomly
      // if (Math.random() < 0.5) {
      //   throw new Error("500 Internal Server Error");
      // }

      if (!email.includes("@") || password.length < 8) {
        throw new Error("password length must be at least 8 characters");
      }

      return true;
    } catch (err) {
      const message = (err as Error).message;

      if (message.includes("password")) {
        setError("Invalid email or password.");
      } else {
        setError("Login failed. Please contact support.");
      }

      console.error("Login failed ->", err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
}
