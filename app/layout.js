import "./globals.css";
import { mainFont } from "@/lib/font";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased">
      <body className={mainFont.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
