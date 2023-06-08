const Label = ({
  children,
  htmlFor,
}: {
  children: React.ReactNode;
  htmlFor: string;
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block mb-2 text-sm font-medium leading-6 text-white"
    >
      {children}
    </label>
  );
};
export default Label;
