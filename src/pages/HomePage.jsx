import Head from "next/head"; // Import the Head component
import TypingEffect from "@/components/TypingEffect";
import Contact from "@/pages/Contact";
import SlideIn from "@/components/animations/SlideIn";
import Projects from "@/sections/Projects";
import SocialSidebar from "@/components/SocialSidebar";
import TechStackCard from "@/sections/TechStackCard";
import ProfileCard from "@/sections/ProfileCard";

const HomePage = () => {
  return (
    <div>
      {/* Add Metadata Here */}
      <Head>
        <title>Darshan - Software Developer | Portfolio</title>
        <meta
          name="description"
          content="Hi, I’m Darshan, a passionate Frontend Developer with a strong focus on creating visually stunning, highly responsive, and intuitive web applications. I specialize in leveraging modern frameworks like React to deliver seamless and engaging user experiences."
        />
        <meta
          name="keywords"
          content="Darshan, Software Developer, Frontend Developer, React, Web Development, Portfolio"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://portfolio-darshan-ks-projects-8c33a9ec.vercel.app/"
        />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Darshan - Software Developer | Portfolio"
        />
        <meta
          property="og:description"
          content="Hi, I’m Darshan, a passionate Frontend Developer dedicated to crafting beautiful, responsive, and user-friendly web applications."
        />
        <meta
          property="og:url"
          content="https://portfolio-darshan-ks-projects-8c33a9ec.vercel.app/"
        />
        <meta property="og:type" content="website" />
      </Head>

      <main className="py-5 sm:py-14 mx-auto px-5 md:px-16 xl:px-5" id="home">
        {/* Header Section */}
        <aside>
          <SocialSidebar />
        </aside>

        <h1 className="text-primary dark:text-PrimaryTextDark my-4">Darshan</h1>
        <TypingEffect
          tag="h3"
          className="md:mt-6 text-SecondaryTextLight dark:text-[#3ccf91] h-8"
        >
          Software Developer
        </TypingEffect>

        {/* About Section */}
        <section className="mt-4 md:mt-7 text-lg lg:w-4/5">
          <p className="text-PrimaryTextLight dark:text-SecondaryTextDark">
            A passionate Frontend Developer with a strong focus
            on creating visually stunning, highly responsive, and intuitive web
            applications. I specialize in leveraging modern frameworks like
            React to deliver seamless and engaging user experiences.
          </p>
        </section>
      </main>
      {/* TechStack Card */}

      <section className="mt-10">
        <TechStackCard />
      </section>

      {/* Profile Card */}

      <section>
        <div className="text-center mt-32 mb-10 animate-pulse">
          <div className="flex items-center justify-center gap-3">
            <h2>About Me</h2>
          </div>
          {/* Bottom Line */}
          <div className="w-1/2 mx-auto mt-4 border-2 dark:border-[#3ccf91]"></div>
        </div>
        <SlideIn>
          <ProfileCard />
        </SlideIn>
      </section>

      {/* Project Card */}
      <section id="projects">
        <div className="text-center mt-32 animate-pulse">
          <div className="flex items-center justify-center gap-3">
            <h2>My Work</h2>
          </div>
          {/* Bottom Line */}
          <div className="w-1/2 mx-auto mt-4 border-2 dark:border-[#3ccf91]"></div>
        </div>
        <SlideIn>
          <Projects />
        </SlideIn>
      </section>

      {/* Contact Card */}
      <section className="md:px-12 xl:px-16 mt-20" id="contact">
        <SlideIn>
          <Contact />
        </SlideIn>
      </section>

      {/* Footer */}
      <footer className="mt-32 mb-10 mx-5 text-center">
        <TypingEffect tag="h2" className="dark:text-primaryDark">
          Let’s Work Together!
        </TypingEffect>

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
    </div>
  );
};

export default HomePage;
