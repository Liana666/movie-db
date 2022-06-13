import "./Input.css";

type Props = {
  placeholder: string;
  value: string;
  name: string;
  type: string;
  className?: string;
  autoComplete?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<Props> = ({
  placeholder,
  value,
  onChange,
  name,
  className,
  type,
  autoComplete,
  onBlur,
}) => {
  return (
    <input
      className={className ? className : "input"}
      type={type}
      name={name}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      autoComplete={autoComplete}
      onBlur={onBlur}
    />
  );
};
