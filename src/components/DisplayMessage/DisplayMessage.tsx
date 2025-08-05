import styles from "./DisplayMessage.module.css";

type DisplayMessageProps = {
  type?: "error" | "success";
  message: string;
};

export function DisplayMessage({
  type = "error",
  message,
}: DisplayMessageProps) {
  return (
    <div
      className={`${styles.message} ${styles[type]}`}
      role="alert"
      aria-live="polite"
    >
      <p>{message}</p>
    </div>
  );
}
