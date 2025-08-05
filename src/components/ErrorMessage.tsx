type ErrorMessageProps = {
  message: string;
};

export function ErrorMessage({ message }: ErrorMessageProps) {
  return ( 
    <div className="error-message" role="alert" aria-live="polite">
        <p>{message}</p>
    </div>
   )
}
