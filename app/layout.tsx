import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChatGPT Clone website",
  description: "A clone of the openAI chatGPT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
    {/* SideBar */}
    {/* ClientProvider - Notification */}
    {/* SideBar */}
        
        <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
