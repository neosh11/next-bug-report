import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientComponent from "./client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // await 0.1 seconds, and return a user

  const user = await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Billy John doe");
    }, 100);
  });

  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientComponent name={user} />
        {children}
      </body>
    </html>
  );
}
