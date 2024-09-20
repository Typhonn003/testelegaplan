import "../styles/button.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: "primary" | "grey" | "delete";
}

export const Button = ({ children, color, ...rest }: ButtonProps) => {
  const buttonClass = `button ${color}`;

  return (
    <button className={buttonClass} {...rest}>
      {children}
    </button>
  );
};
