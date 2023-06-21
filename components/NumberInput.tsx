import { forwardRef } from "react";

const NumberInput = forwardRef(function NumberInput(
  props: React.InputHTMLAttributes<HTMLInputElement>,
  ref: any
) {
  return (
    <input
      type="number"
      className="w-full border-0 bg-transparent py-1.5 text-white text-end focus:ring-0 sm:text-sm sm:leading-6"
      {...props}
      ref={ref}
    />
  );
});
export default NumberInput;
