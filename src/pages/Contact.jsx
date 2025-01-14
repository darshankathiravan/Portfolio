"use client";
import { useState, useCallback } from "react";
import ContactForm2 from "@/components/ContactForm2";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

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
    <section className="grid grid-cols-1 xl:grid-cols-2 bg-cardbglight text-PrimaryBgLight p-5 sm:w-4/5 rounded-lg mx-4 sm:mx-auto">
      <aside className="flex flex-col items-start p-3">
        <h2 className="mb-4">Let's Connect!</h2>
        <p className="text-lg mb-6 dark:text-[#3ccf91]">
          Feel free to reach out and share your experience with my portfolio!
          I'd love to hear your feedback and thoughts on how you liked it.
        </p>

        {/* Contact Information */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center">
            <span className="mr-4">📧</span>
            <span>kathiravandarshan@gmail.com</span>
          </div>
          <div className="flex items-center">
            <span className="mr-4">📞</span>
            <span>+91-6383107610</span>
          </div>
          <div className="flex items-center">
            <span className="mr-4">📍</span>
            <span>Chennai, India</span>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://www.linkedin.com/in/darshan-k-540921b5/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/darshankathiravan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/darshann__k?utm_source=qr&igsh=enl6a3RtbG5oZXls"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaInstagram />
          </a>
        </div>
      </aside>
      <div className="py-2 sm:py-3">
        <ContactForm2
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          status={status}
        />
        {status && <p className="mt-4 text-center text-purple-700">{status}</p>}
      </div>
    </section>
  );
};

export default Contact;
