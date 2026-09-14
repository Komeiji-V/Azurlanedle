import type { Metadata } from "next";
import "./globals.css";
import { UpdateCenter } from "./update-center";

const publicAssetPrefix = process.env.GITHUB_PAGES === "true" ? "/hangyiba" : "";

export const metadata: Metadata = {
  title: "航一把｜猜碧蓝航线舰船",
  description: "用八次机会猜出今天的碧蓝航线舰船。",
  icons: {
    icon: `${publicAssetPrefix}/favicon.svg`,
    shortcut: `${publicAssetPrefix}/favicon.svg`,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        <UpdateCenter />
        {children}
      </body>
    </html>
  );
}
