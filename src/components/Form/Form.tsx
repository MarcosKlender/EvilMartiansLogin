import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

import { Input } from "../Input/Input";
import { DisplayMessage } from "../DisplayMessage/DisplayMessage";
import { Button } from "../Button/Button";

import styles from './Form.module.css';

type FormProps = {
  onSuccess?: () => void;
};

export function Form({ onSuccess }: FormProps) {
  const { login, loading, error } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (loading) return;
    const success = await login(email, password);

    if (success && onSuccess) {
      onSuccess();
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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

      <Button type="submit" disabled={loading}>
        {loading ? "Logging in..." : "Log In"}
      </Button>
    </form>
  );
}
