type ButtonProps = {
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  onClick?: () => void;
  children: React.ReactNode;
};

export function Button({
  type = "button",
  variant = "primary",
  onClick,
  children,
}: ButtonProps) {
  return (
    <button type={type} className={variant} onClick={onClick}>
      {children}
    </button>
  );
}
