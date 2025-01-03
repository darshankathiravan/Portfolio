"use client";
import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // Track success/error status

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const response = await fetch("https://formspree.io/f/xlddojbq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Success! Your message has been sent.");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Error! Please try again later.");
    }
  };

  return (
    <div>
      <h1 className="bg-[#1f2124] ps-16 py-7">Contact Me</h1>
      <div className="grid grid-cols-2 p-28">
        <div>
          <h1 className="text-3xl">Reach Out</h1>
          <h3 className="flex">
            <MdEmail className="mt-3.5 me-2" />
            <a href="mailto:kathiravandarshan@gmail.com">
              kathiravandarshan@gmail.com
            </a>
          </h3>
          <h3 className="flex -mt-2">
            <FaGithub className="mt-3.5 me-2" />
            <a href="https://github.com/darshankathiravan" target="_blank">
              Github
            </a>
          </h3>
          <h3 className="flex -mt-2">
            <FaLinkedin className="mt-3.5 me-2" />
            <a
              href="https://www.linkedin.com/in/darshan-k-540921b5/"
              target="_blank"
            >
              LinkedIn
            </a>
          </h3>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            className="px-2 py-4 m-2"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className="px-2 py-4 m-2"
            name="email"
            placeholder="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            className="px-2 py-4 m-2"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button className="self-start bg-[#467599] py-2 px-4 rounded-sm ms-2 mt-2" type="submit">Submit</button>
        </form>
        {status && <p>{status}</p>} {/* Show success or error message */}
      </div>
    </div>
  );
};

export default Contact;
