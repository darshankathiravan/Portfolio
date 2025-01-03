import "./globals.css";
import Navbar from "@/components/Navbar"
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {" "}
        <Navbar /> {/* Navbar will appear on all screens */}
        {children} {/* Render the current page */}
      </body>
    </html>
  );
}
