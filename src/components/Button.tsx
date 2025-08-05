type ButtonProps = {
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
};

export function Button({
  type = "button",
  variant = "primary",
  disabled,
  onClick,
  children,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={variant}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
