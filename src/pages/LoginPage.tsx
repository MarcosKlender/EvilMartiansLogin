import { Form } from "../components/Form";

type LoginPageProps = {
  onLoginSuccess?: () => void;
};

export function LoginPage({ onLoginSuccess }: LoginPageProps) {
  return (
    <main>
      <h1>Welcome to EML!</h1>
      <Form onSuccess={onLoginSuccess} />
    </main>
  );
}
