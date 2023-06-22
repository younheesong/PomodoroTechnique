import { forwardRef } from "react";
interface ButtonProps {
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  onClick?: () => void;
  bgColor?: string | null;
  textColor?: string;
  borderRound?: string;
  borderColor?: string;
  height?: string;
}

const Button = forwardRef(function TextInput(
  {
    type = "button",
    children,
    onClick,
    bgColor = null,
    textColor = "text-white",
    borderRound = "rounded-md",
    borderColor,
    height,
  }: ButtonProps,
  ref: any
) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full px-2 py-1.5 border ${textColor} ${bgColor} ${borderRound} ${borderColor} ${height}`}
    >
      {children}
    </button>
  );
});
export default Button;
