import React from "react";
import { MdOutlineMarkEmailRead, MdOutlineMailOutline } from "react-icons/md";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-slate-900 flex justify-center items-center p-4 "
    >
      <form
        method="POST"
        action="https://getform.io/f/mepNx2bM"
        className="flex flex-col max-w-[700px] w-full "
      >
        <div className="pb-6">
          <p className="text-4xl font-bold inline border-b-4 border-sky-400 text-white">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form below or shoot me an email - aedantiu@gmail.com
          </p>
        </div>
        <input
          className=" p-2 bg-[#ccd6f6] outline-none"
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] outline-none"
          type="email"
          placeholder="Email"
          name="email"
          autoComplete="off"
        />
        <textarea
          className="bg-[#ccd6f6] p-2 outline-none"
          name="message"
          rows="10"
          placeholder="Message"
          autoComplete="off"
        ></textarea>
        <button className="text-white w-[14rem] group overflow-hidden border-2 hover:bg-sky-400 hover:border-sky-400 duration-300 px-4 py-3 my-8 mx-auto flex items-center transition-all">
          <span className="mx-4 font-semibold">Let's Connect</span>
          <div className="flex justify-center items-center flex-col">
            <MdOutlineMailOutline
              size={29}
              className="translate-y-3.5 group-hover:-translate-y-20 transition-all duration-300"
            />
            <MdOutlineMarkEmailRead
              size={29}
              className="translate-y-20 group-hover:-translate-y-3.5 transition-all duration-300"
            />
          </div>
        </button>
      </form>
    </div>
  );
};

export default Contact;
