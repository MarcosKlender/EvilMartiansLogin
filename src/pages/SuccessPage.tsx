import { DisplayMessage } from "../components/DisplayMessage/DisplayMessage";
import { Button } from "../components/Button/Button";

type SuccessPageProps = {
  onLogout: () => void;
};

export function SuccessPage({ onLogout }: SuccessPageProps) {
  return (
    <main>
      <h1>Login Successful</h1>
      <DisplayMessage
        type="success"
        message="Welcome, it's great to see you again!"
      />
      <Button variant="secondary" onClick={onLogout}>
        Log Out
      </Button>
    </main>
  );
}
