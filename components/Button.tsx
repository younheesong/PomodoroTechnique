const Button = ({
  children,
  onClick,
  bgColor = "bg-gray-800",
  textColor = "text-white",
  borderRound = "rounded-sm",
}: {
  children: React.ReactNode;
  onClick?: any;
  bgColor?: string;
  textColor?: string;
  borderRound?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={`p-2.5 ${textColor} ${bgColor} ${borderRound}`}
    >
      {children}
    </button>
  );
};
export default Button;
