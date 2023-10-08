import SideBar from "@/components/SideBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "@/components/SessionProvider";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChatGPT Clone website",
  description: "A clone of the openAI chatGPT",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions)
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>

        <div className="flex">
          {/* SideBar */}
          <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
            <SideBar />
          </div>
          {/* ClientProvider - Notification */}
          {/* SideBar */}

          <div className="bg-[#343541] flex-1">{children}</div>
        </div>
        </SessionProvider>
      </body>
    </html>
  );
}
