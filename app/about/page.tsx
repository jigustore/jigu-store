import Link from "next/link";

const About = () => {
  return (
    <div className="w-full px-10 md:px-20 text-left">
      <h1 className="font-bold my-4 text-3xl text-theme">About</h1>

      <section className="w-full flex flex-col justify-between items-start gap-10 py-5">
        {/* <span className="text-theme text-8xl font-bold">Jigu Store</span> */}
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <p className="text-justify text-3xl md:text-6xl font-bold text-theme-gray lg:w-[41%]">
            Jigu store is your one-stop store for{" "}
            <span className="text-[1.5em] font-extrabold text-theme">
              Electronics
            </span>{" "}
            and{" "}
            <span className="text-[1.5em] font-extrabold text-theme">
              Technical
            </span>{" "}
            solution.
          </p>
          <img
            src="/icon.png"
            className="order-first lg:order-last max-w-[20rem] lg:max-w-sm my-[-5%]"
          />
        </div>
        <Link
          href={"/services"}
          className="border border-theme-gray/50 shadow-sm p-2 px-3 rounded-sm hover:bg-theme-w-alt"
        >
          Explore Services
        </Link>
      </section>
    </div>
  );
};

export default About;
