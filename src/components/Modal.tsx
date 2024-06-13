import { Transition } from "@headlessui/react";
import { X } from "lucide-react";
import React from "react";

function Modal(props: any) {
  const { onClick, children, isOpen, name, ...rest } = props;
  return (
    <Transition
      show={isOpen}
      enter="transition-opacity duration-1500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-1500"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="w-full min-h-screen fixed top-0 bottom-0 right-0 left-0 flex items-center z-10">
        <div
          className="bg-black opacity-40 absolute z-[10] left-0 right-0 top-0 bottom-0"
          onClick={onClick}
        ></div>
        <div className="card bg-white w-10/12 lg:w-1/2 mx-auto p-5 rounded-md border shadow-md animate-swoosh_from_top z-[10]">
          <div className="title flex justify-between items-center pb-2 border-b-2">
            <h4>{name}</h4>
            <X size={20} className="cursor-pointer" onClick={onClick} />
          </div>
          <div className="mt-2">{children}</div>
        </div>
      </div>
    </Transition>
  );
}

export default Modal;
