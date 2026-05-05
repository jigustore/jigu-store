import Link from "next/link";
import CommingSoon from "./components/CommingSoon";

export default function Home() {
  return (
    <>
      <main className="min-h-screen min-w-screen flex flex-col justify-around items-center">
        <div>
          <span className="font-semibold text-xl text-theme-gray">
            Build Unthinkable with
          </span>
          <h1 className="bg-linear-to-r from-theme to-theme/70 via-theme-alt bg-size-[200%_auto] bg-clip-text text-transparent animate-gradient-x md:text-[10rem] text-7xl font-black p-4">
            Jigu Store
          </h1>
        </div>
        <Link
          href="/services"
          className="bg-theme-alt text-theme-w text-xl hover:bg-theme p-3 px-5 font-semibold rounded-md duration-300"
        >
          Browse Services
        </Link>
      </main>
      <CommingSoon oClassName="bg-theme-red/20">
        Other Update Comming Soon!
      </CommingSoon>
    </>
  );
}
