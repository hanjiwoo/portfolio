import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Single_Day } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

const noto = Single_Day({
  weight: "400",
});

export const metadata: Metadata = {
  title: "한지우 포트폴리오",
  description: "한지우 세상",
  icons: { icon: "/빨간따봉.png" },
  openGraph: {
    images: ["/미란이3.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={noto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
