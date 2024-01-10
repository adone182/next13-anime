import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Utilities/Navbar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "OnlyAnime",
  description: "Website Anime Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-color-primary text-color-dark`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
