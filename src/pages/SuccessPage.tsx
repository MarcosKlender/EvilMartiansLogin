import { Button } from "../components/Button";

type SuccessPageProps = {
    onLogout: () => void;
}

export function SuccessPage({ onLogout }: SuccessPageProps) {
  return (
    <main>
      <h1>Login Successful</h1>
      <p>Welcome back, it's great to see you!</p>
      <Button variant="secondary" onClick={onLogout}>Log Out</Button>
    </main>
  );
}
