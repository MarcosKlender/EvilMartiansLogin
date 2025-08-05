import { useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";

export function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id="email"
        label="Email"
        type="email"
        placeholder="marcosklender@hire.me"
        autoComplete="email"
        onChange={setEmail}
      />
      <Input
        id="password"
        label="Password"
        type="password"
        placeholder="••••••••"
        autoComplete="current-password"
        onChange={setPassword}
      />
      <Button type="submit" variant="primary">
        Log In
      </Button>
    </form>
  );
}
