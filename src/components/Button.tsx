type ButtonProps = {
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  children: React.ReactNode;
};

export function Button({
  type = "button",
  variant = "primary",
  children,
}: ButtonProps) {
  return (
    <button type={type} className={variant}>
      {children}
    </button>
  );
}
