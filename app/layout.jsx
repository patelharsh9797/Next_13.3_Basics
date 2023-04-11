import { Open_Sans } from "next/font/google";
import "./globals.css";

// TODO Components
import Header from "./components/Header";

const fonts = Open_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Next.JS 13.3 Basics | Home",
  description: "Learning Next.JS 13.3",
  keywords: "web developer, next.js, next.js 13, next.js 13.3",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fonts.className}>
        <Header />
        <main className="container py-4">{children}</main>
      </body>
    </html>
  );
}
