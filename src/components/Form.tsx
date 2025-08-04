import { Input } from "./Input";
import { Button } from "./Button";

export function Form() {
  return (
    <form>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button type="submit" variant="primary">
        Login
      </Button>
    </form>
  );
}
