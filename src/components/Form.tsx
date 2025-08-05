import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

import { Input } from "./Input";
import { DisplayMessage } from "./DisplayMessage";
import { Button } from "./Button";

type FormProps = {
  onSuccess?: () => void;
};

export function Form({ onSuccess }: FormProps) {
  const { login, loading, error } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const success = await login(email, password);

    if (success && onSuccess) {
      onSuccess();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id="email"
        label="Email"
        type="email"
        placeholder="marcosklender@hire.me"
        autoComplete="email"
        onChange={(value) => setEmail(value)}
      />
      <Input
        id="password"
        label="Password"
        type="password"
        placeholder="••••••••"
        autoComplete="current-password"
        onChange={(value) => setPassword(value)}
      />

      {error && <DisplayMessage type="error" message={error} />}

      <Button type="submit" variant="primary">
        {loading ? "Logging in..." : "Log In"}
      </Button>
    </form>
  );
}
