import React from "react";
import Title from "./Title";

function Contact() {
  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        
        <form
          className="flex flex-col w-full md:w-1/2"
          action="https://getform.io/f/6cf448c4-d770-4487-b444-825e68f85f0d"
          method="POST"
        >
        <Title id="contact">Contact</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
          ></textarea>
          <button
            type="button"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-violet-500 hover:yellow-500"
          >
            Work With Me
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
