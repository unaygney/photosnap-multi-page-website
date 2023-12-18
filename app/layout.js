import { mainFont } from "@/lib/font";
import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased">
      <body className={mainFont.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
