type InputProps = {
  id: string;
  label: string;
  type?: "text" | "email" | "password";
  value?: string;
  placeholder?: string;
  autoComplete?: string;
  onChange: (value: string) => void;
};

export function Input({
  id,
  label,
  type = "text",
  placeholder,
  value,
  autoComplete,
  onChange,
}: InputProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        required
      />
    </div>
  );
}
