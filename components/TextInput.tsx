import { forwardRef } from "react";

const TextInput = forwardRef(function TextInput(
  props: React.InputHTMLAttributes<HTMLInputElement>,
  ref: any
) {
  return (
    <div className="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-slate-200">
      <input
        type="text"
        className="w-full border-0 bg-transparent py-1.5 text-white focus:ring-0 sm:text-sm sm:leading-6"
        {...props}
        ref={ref}
      />
    </div>
  );
});
export default TextInput;
