const TextareaInput = (
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement>
) => {
  return (
    <textarea
      className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus-within:ring-slate-200 sm:text-sm sm:leading-6"
      {...props}
    />
  );
};
export default TextareaInput;
