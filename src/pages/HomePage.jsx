// pages/index.js
import TypingEffect from "@/components/TypingEffect";
const HomePage = () => {
  return (
    <div className="py-20 ps-28 text-left w-3/5">
      <h2 className="text-[#9a9da0]">Darshan</h2>
      <TypingEffect tag="h1">Software Developer</TypingEffect>
      <p>
        {" "}
        "Hi, I’m Darshan, a passionate Frontend Developer dedicated to crafting
        beautiful, responsive, and user-friendly web applications. I specialize
        in modern frameworks like React ensuring pixel-perfect designs and
        seamless user experiences.
        <br /><br/>
        Highly motivated to build a career in software development and deliver
        impactful results
        <br /><br/>
        I’m always open for collaborative work—let’s create something amazing
        together! Check out my portfolio to see how I bring code to life!"
      </p>
      <TypingEffect tag="h3">Skills Summary</TypingEffect>
      <p>
        <b>Languages:</b> JavaScript, Python, HTML, CSS, Java.
      </p>
      <p>
        <b>Frameworks:</b> React, Next.js, Tailwind CSS, Django, Bootstrap.
      </p>
      <p>
        <b>Tools:</b> Git/GitHub, Azure
      </p>
    </div>
  );
};

export default HomePage;
