import { useRef, useContext, useState, useEffect } from "react";

const ModalContainer = (props) => {
  const modalRef = useRef(null);
  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      props.closeModal();
    }
  };

  return (
    <div className="">
      {props.openModal && (
        <div
          className="fixed top-0 left-0 bg-[#01010675] w-full h-full"
          onClick={handleOutsideClick}
        >
          <div
            className="max-lg:w-[60%] border border-blue-900 max-sm:w-[90%] fixed bg-[#07071C] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-xl"
            ref={modalRef}
          >
            <div className="flex justify-between pt-6 px-8 items-center">
              <p className="text-2xl font-semibold">{props.title}</p>
              <span
                className="text-[#a4a4a9] text-4xl font-bold px-2"
                onClick={props.closeModal}
              >
                &times;
              </span>
            </div>
            {props.children}
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalContainer;
