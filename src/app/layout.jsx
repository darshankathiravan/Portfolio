import "./globals.css";
import Navbar from "@/components/Navbar";
import Provider from "@/Provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="lg:mx-20 xl:mx-36 bg-PrimaryBgLight dark:bg-PrimaryBgDark">
        <Provider attribute="class" defaultTheme="system" enableSystem={false}>
          <Navbar /> {/* Navbar will appear on all screens */}
          {children} {/* Render the current page */}
        </Provider>
      </body>
    </html>
  );
}