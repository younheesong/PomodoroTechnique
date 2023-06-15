const Button = ({
  type = "button",
  children,
  onClick,
  bgColor = "bg-zinc-900",
  textColor = "text-white",
  borderRound = "rounded-sm",
  height = "",
}: {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  onClick?: () => void;
  bgColor?: string;
  textColor?: string;
  borderRound?: string;
  height?: string;
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full px-2 py-1.5 ${textColor} ${bgColor} ${borderRound} ${height}`}
    >
      {children}
    </button>
  );
};
export default Button;
