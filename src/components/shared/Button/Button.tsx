import "./Button.css";

type Props = {
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  onClick?: () => void;
  text: string;
  size: string;
};

export const Button: React.FC<Props> = ({
  type,
  disabled,
  onClick,
  text,
  size,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={["btn", `btn--${size}`].join(" ")}
    >
      {text}
    </button>
  );
};
