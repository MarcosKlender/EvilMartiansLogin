type DisplayMessageProps = {
  type?: "error" | "success";
  message: string;
};

export function DisplayMessage({ type, message }: DisplayMessageProps) {
  return (
    <div className={`${type}-message`} role="alert" aria-live="polite">
      <p>{message}</p>
    </div>
  );
}
