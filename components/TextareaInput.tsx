import { forwardRef } from "react";

const TextareaInput = forwardRef(function TextareaInput(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  ref: any
) {
  return (
    <textarea
      className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus-within:ring-slate-200 text-sm sm:leading-6"
      {...props}
      ref={ref}
    />
  );
});
export default TextareaInput;
