import type { Metadata } from "next";
import { GameBoard } from "./game-board";

export const metadata: Metadata = {
  title: "航一把｜猜碧蓝航线舰船",
  description: "用八次机会猜出今天的碧蓝航线舰船。",
};

export default function Home() {
  return <GameBoard />;
}
