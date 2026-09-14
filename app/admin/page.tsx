import type { Metadata } from "next";
import { AdminPanel } from "./panel";

export const metadata: Metadata = {
  title: "内容后台｜航一把",
  description: "在本地浏览器管理航一把的舰船、别名和判定标签。",
};

export default function AdminPage() {
  return <AdminPanel />;
}
