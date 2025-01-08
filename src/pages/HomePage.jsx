"use client"; // Ensures this page is rendered on the client side

import TypingEffect from "@/components/TypingEffect";

const HomePage = () => {
  return (
    <>
      <main className="py-14 mx-auto px-10 md:px-12 xl:px-16 bg-SecondaryBgLight dark:bg-SecondaryBgDark text-textLight dark:text-textDark">
        {/* Header Section */}
        <h1 className="text-5xl text-primary dark:text-SecondaryTextDark">
          Darshan
        </h1>
        <TypingEffect
          tag="h2"
          className="mt-2 h-8 text-2xl text-SecondaryTextLight dark:text-PrimaryTextDark"
        >
          Software Developer
        </TypingEffect>

        {/* About Section */}
        <section className="mt-7 text-lg lg:w-4/5">
          <p className="text-PrimaryTextLight dark:text-SecondaryTextDark">
            "Hi, I’m Darshan, a passionate Frontend Developer dedicated to
            crafting beautiful, responsive, and user-friendly web applications.
            I specialize in modern frameworks like React ensuring pixel-perfect
            designs and seamless user experiences.
            <br />
            <br />
            Highly motivated to build a career in software development and
            deliver impactful results
            <br />
            <br />
            I’m always open for collaborative work—let’s create something
            amazing together! Check out my portfolio to see how I bring code to
            life!"
            <a
              href="#portfolio"
              className="text-accentLight hover:underline dark:text-accentDark"
            >
              {" "}
              portfolio
            </a>{" "}
            and see how I bring ideas to life with code.
          </p>
        </section>

        {/* Skills Summary Section */}
        <section className="text-PrimaryTextLight dark:text-SecondaryTextDark">
          <TypingEffect tag="h3" className="mt-10 h-8 font-bold">
            Skills Summary
          </TypingEffect>
          <p>
            <b>Languages:</b> JavaScript, Python, HTML, CSS, Java.
          </p>
          <p className="my-1">
            <b>Frameworks:</b> React, Next.js, Tailwind CSS, Django, Bootstrap.
          </p>
          <p className="my-1">
            <b>Tools:</b> Git/GitHub, Azure
          </p>
        </section>
      </main>

      <footer className="my-10 text-center">
        <h2
          id="contact-heading"
          className="text-3xl font-semibold text-primary dark:text-primaryDark"
        >
          Let’s Work Together!
        </h2>
        <p className="mt-4 text-lg">
          Interested in collaborating? Reach out to me via{" "}
          <a
            href="mailto:kathiravandarshan@gmail.com"
            className="text-accentLight hover:underline dark:text-accentDark"
          >
            email
          </a>{" "}
          or connect on{" "}
          <a
            href="https://www.linkedin.com/in/darshan-k-540921b5/"
            target="_blank"
            className="text-accentLight hover:underline dark:text-accentDark"
          >
            LinkedIn
          </a>
          .
        </p>
      </footer>
    </>
  );
};

export default HomePage;
