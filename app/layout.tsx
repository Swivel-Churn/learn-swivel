import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Learn Swivel - AI-Powered Customer Retention",
  description:
    "Discover how Swivel uses AI to predict and prevent customer churn. Turn data into retention strategies that keep your customers engaged.",
  icons: {
    icon: "/favicon.ico",
    apple: "/swivel-logo-2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
