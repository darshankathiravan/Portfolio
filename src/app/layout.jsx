import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem={false}>
        <body className="lg:mx-20 xl:mx-36 bg-PrimaryBgLight dark:bg-PrimaryBgDark">
          {" "}
          <Navbar /> {/* Navbar will appear on all screens */}
          {children} {/* Render the current page */}
        </body>
      </ThemeProvider>
    </html>
  );
}
