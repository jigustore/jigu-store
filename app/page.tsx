import { GiTimeTrap } from "react-icons/gi";
import { LuConstruction } from "react-icons/lu";

export default function Home() {
  return (
    <main className="h-full min-w-screen justify-around items-center">
      <div className="flex flex-col justify-evenly items-center gap-20 p-8">
        <LuConstruction className="text-theme text-[15rem]" />
        <span className="animate-pulse font-bold text-4xl">
          Webiste Under Construction! Visit Soon
        </span>
        <GiTimeTrap className="animate-spin text-theme text-6xl" />
      </div>
    </main>
  );
}
