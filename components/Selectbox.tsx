import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/solid";

interface OptionPrpos {
  label: string;
  value: string;
}
interface SelectboxProps {
  options: OptionPrpos[];
  onChange: (value: string) => void;
  disabled?: boolean;
  value: string;
}

const Selectbox = ({
  options,
  value,
  onChange,
  disabled = false,
  ...props
}: SelectboxProps) => {
  return (
    <Listbox value={value} onChange={onChange} disabled={disabled}>
      {({ open }) => (
        <>
          <div className="relative mt-2">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white/5 py-1.5 pl-3 pr-10 text-left text-white shadow-sm ring-1 ring-inset ring-white/10 focus:outline-none focus:ring-2 focus-within:ring-slate-200 text-sm sm:leading-6">
              <span className="block truncate">
                {options.filter((item) => item.value === value)[0]?.label}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-white"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white/5 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-sm">
                {options.map((option) => (
                  <Listbox.Option
                    key={option.value}
                    className={`  
                        relative bg-zinc-800 cursor-default select-none py-2 pl-3 pr-9 ${
                          option.value === value
                            ? "bg-indigo-600 text-white"
                            : "text-white"
                        }
                    `}
                    value={option.value}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`${
                            selected ? "font-semibold" : "font-normal"
                          }
                            "block truncate"
                          )`}
                        >
                          {option.label}
                        </span>

                        {selected ? (
                          <span
                            className={
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            }
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default Selectbox;
