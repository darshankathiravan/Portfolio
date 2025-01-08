"use client";
import { useState, useCallback } from "react";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // Track success/error status

  // Handle input change from Contact component
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle form submit
  const handleSubmit = useCallback(
    async (e) => {
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
    },
    [formData]
  );

  return (
    <div>
      <h1 className="bg-SecondaryBgLight dark:bg-SecondaryBgDark ps-16 py-7">Contact Me</h1>
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

        {/* Pass props to ContactForm */}
        <ContactForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          status={status}
        />
      </div>
    </div>
  );
};

export default Contact;
