import Link from "next/link";
import CommingSoon from "./components/CommingSoon";
import { _homeItems1, _homeItems2 } from "@/lib/data/_homeItems";
import Card from "./components/Card";

export default function Home() {
  return (
    <>
      <main className="min-h-screen min-w-screen relative flex flex-col justify-around items-center">
        <div className="absolute w-full h-screen -top-5 left-0 opacity-10 bg-theme-black/10 -z-10 overflow-hidden">
          <img src="/images/landing.png" className="min-h-full object-cover" />
        </div>
        <div className="h-screen flex flex-col justify-around items-center">
          <div>
          <span className="font-semibold text-xl">
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
          </div>

        <div className="w-full min-h-32 p-4 bg-theme">
          <h2 className="font-bold text-4xl">Nepalese trusted brand</h2>
          <p>Supporting every technological revolution. </p>
        </div>

        <hr className="w-full border border-theme-gray my-5" />
        <section className="flex flex-col justify-evenly items-center my-5 min-h-[50%]">
            <h1 className="text-4xl font-bold">Experience Platform with</h1>
          <div className="flex flex-row flex-wrap justify-evenly items-center gap-10">
            {_homeItems1.map((item, ind) => {
              return (
                <Card key={ind}>
                  <h2 className="font-bold text-xl my-5">{item.title}</h2>
                  <p className="font-main-alt text-vs">{item.description || "This is placeholder for description...."}</p>
                  <Link href={item.url} className="bg-theme p-1 px-2 rounded-md hover:-translate-y-0.5 duration-300">Read More</Link>
                </Card>
              )
            })}
          </div>
        </section>

        <hr className="w-full border border-theme-gray my-5" />

        <section className="flex flex-col justify-evenly items-center my-5 min-h-[50%]">
            <h1 className="text-4xl font-bold">Seamless integration of technology stack</h1>
          <div className="flex flex-row flex-wrap justify-evenly items-center gap-10">
            {_homeItems2.map((item, ind) => {
              return (
                <Card key={ind}>
                  <h2 className="font-bold text-xl my-5">{item.title}</h2>
                  <p className="font-main-alt text-vs">{item.description || "This is placeholder for description...."}</p>
                  <Link href={item.url} className="bg-theme p-1 px-2 rounded-md hover:-translate-y-0.5 duration-300">Read More</Link>
                </Card>
              )
            })}
          </div>
        </section>
      </main>
      <CommingSoon oClassName="">
        Other Update Comming Soon!
      </CommingSoon>
    </>
  );
}
