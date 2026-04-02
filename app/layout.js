import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pande Gede Dani Wismagatha | Data Scientist & ML Engineer",
  description: "Portfolio of Pande Gede Dani Wismagatha - Data Scientist specializing in AI, Machine Learning, and Data Analytics with 2+ years of experience.",
  keywords: ["Data Scientist", "Machine Learning", "AI", "Portfolio", "Data Analytics"],
  author: "Pande Gede Dani Wismagatha",
  openGraph: {
    title: "Pande Gede Dani Wismagatha | Data Scientist & ML Engineer",
    description: "Portfolio of a Data Scientist specializing in AI and Machine Learning",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}