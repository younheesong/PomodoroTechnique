import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "./Button";

const ModalTitle = ({ children }: { children: React.ReactNode }) => (
  <Dialog.Title
    as="h3"
    className="flex w-full justify-center text-xl mx-auto font-semibold leading-6 text-white"
  >
    {children}
  </Dialog.Title>
);
const ModalBody = ({ children }: { children: React.ReactNode }) => (
  <div className="my-4">
    <p className="text-sm text-white text-center">{children}</p>
  </div>
);

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  overlayCss?: string;
  contentCss?: string;
  closeText?: string;
}

const Modal = ({
  isOpen,
  onClose,
  children,
  overlayCss,
  contentCss,
  closeText,
}: ModalProps) => {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={onClose}
      >
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="min-w-[320px] relative transform overflow-hidden rounded-lg bg-black px-4 pb-4 pt-5 text-left shadow-lg  shadow-zinc-500/50 transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="flex flex-col">{children}</div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <Button
                    borderColor="border-gray-300"
                    type="button"
                    onClick={() => onClose()}
                    ref={cancelButtonRef}
                  >
                    {closeText ?? "닫기"}
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
Modal.Title = ModalTitle;
Modal.Body = ModalBody;
export default Modal;
