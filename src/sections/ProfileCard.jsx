import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FaBoltLightning, FaGithub } from "react-icons/fa6";
import { CgNotes } from "react-icons/cg";
import { MdComputer, MdEngineering } from "react-icons/md";

const ProfileCard = () => {
  const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Constant Array of Cards
  const profileDetails = [
    {
      icon: <FaBoltLightning size={40} />,
      title: "Full Stack Web Developer",
      description:
        "Experienced in developing websites using React and other languages.",
    },
    {
      icon: <MdEngineering size={40} />,
      title: "Engineering Graduate",
      description:
        "Graduated as an Electronics and Computer Engineer with 8.2 CGPA at SRM University.",
    },
    {
      icon: <MdComputer size={40} />,
      title: "Tech Enthusiast",
      description:
        "Driven by a passion for learning and exploring cutting-edge technologies.",
    },
    {
      icon: <FaGithub size={40} />,
      title: "Open Source Contributor Enthusiast",
      description:
        "Interested in creating projects and occasionally contributing to open-source projects on GitHub.",
    },
  ];

  return (
    <section className="flex flex-wrap justify-center items-center rounded-3xl overflow-hidden w-fit mx-auto">
      <div className="rounded-2xl overflow-hidden">
        <Image
          src="/assets/profile/darshan.JPG"
          alt="profile"
          width={400}
          height={200}
        />
      </div>
      <div className="max-w-[25rem] sm:max-w-[24rem] mt-2 sm:mt-0 sm:ms-2 ">
        {profileDetails.map((item, index) => (
          <motion.div
            key={index}
            className={`bg-cardbg flex items-center px-3 py-3 mb-2 lg:m-2 rounded-sm bg-[#6bf5b2] text-PrimaryTextLight dark:text-PrimaryBgLight dark:bg-cardbglight`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUpVariants}
          >
            {item.icon}
            <div className="ms-2">
              <p className="font-bold dark:text-[#3ccf91]">{item.title}</p>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
        <motion.div
          className="bg-PrimaryBgDark  dark:bg-[#3ccf91] text-white px-3 py-1 -mt-1 mx-2 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUpVariants}
        >
          <a
            className="flex justify-center"
            href="/assets/about/resume.pdf"
            download="Darshan_K.pdf"
          >
            <CgNotes className="mt-1 mx-1" />
            My Curriculum Vitae (CV)
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfileCard;
