import "./globals.css";
import Navbar from "@/components/Navbar";
import Provider from "@/Provider";
import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
      </head>
      <body className="lg:mx-20 xl:mx-36 bg-PrimaryBgLight dark:bg-PrimaryBgDark">
        <Provider attribute="class" defaultTheme="system" enableSystem={false}>
          <Navbar /> {/* Navbar will appear on all screens */}
          {children} {/* Render the current page */}
        </Provider>
      </body>
    </html>
  );
}
