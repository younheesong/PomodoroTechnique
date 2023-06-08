const NumberInput = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      type="number"
      className="w-full border-0 bg-transparent py-1.5 text-white text-end focus:ring-0 sm:text-sm sm:leading-6"
      {...props}
    />
  );
};
export default NumberInput;
