import { _serviceCatEntry } from "@/lib/data/_serviceCat";
import CommingSoon from "../components/CommingSoon";
import Link from "next/link";
import { CiCircleInfo, CiStar } from "react-icons/ci";

interface IServiceCatItem {
  title: string;
  imgURL?: string;
  descriptions?: string;
  available?: boolean; // if false, then comming soon
}

interface IServiceCat {
  title: string;
  items?: IServiceCatItem[];
}

const Services = () => {
  return (
    <div className="w-full">
      <h1 className="text-theme-gray font-bold my-2 text-3xl">Services</h1>

      <section className="w-full m-auto max-w-6xl flex flex-col justify-evenly items-center gap-6 my-10 md:px-20 px-10">
        {_serviceCatEntry.map((sce, ind) => {
          return <ServiceCat key={ind} {...sce} />;
        })}
      </section>

      <CommingSoon>
        <span>Others Comming Soon!!</span>
      </CommingSoon>
    </div>
  );
};

const ServiceCat = ({ title, items }: IServiceCat) => {
  return (
    <div className="w-full my-2 flex flex-col justify-evenly items-start">
      <h2 className="font-extrabold text-theme mb-5 text-xl p-1">
        <CiStar className="inline-block mr-1" />
        {title}
      </h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 place-items-center gap-5">
        {items?.map((scei, ind) => {
          return <ServiceCatItem key={ind} {...scei} />;
        })}
      </div>
      <hr className="w-[90%] m-auto border-theme-gray/30 my-5" />
    </div>
  );
};

const ServiceCatItem = ({
  title,
  imgURL,
  descriptions,
  available,
}: IServiceCatItem) => {
  return (
    <div className="relative flex flex-col justify-evenly min-w-56 w-full h-full md:max-w-sm min-h-56 rounded-xl border border-theme/30 hover:border-theme hover:-translate-y-0.5 shadow-md p-2 duration-300 gap-4">
      <span
        className={`absolute top-[5%] left-[-5%] -rotate-45 animate-pulse font-bold text-vs ${!available ? "text-red-500" : "text-green-500"}`}
      >
        {!available ? "Comming Soon" : "Available"}
      </span>
      <h2 className="font-semibold">{title}</h2>
      <img
        src={imgURL}
        alt={title}
        className="max-w-56 max-h-56 m-auto border-none"
      />
      <p className="text-theme-black-alt text-vs text-justify -mb-2">
        {descriptions ? descriptions : "For More Info"}
      </p>
      <Link
        href={`https://wa.me/+9779868053067?text=I am interested in ${title}`}
        className="bg-theme-alt/80 hover:bg-theme text-theme-w p-1 px-2 font-semibold rounded-md"
      >
        <CiCircleInfo className="inline-block mr-2" />
        Enquire now
      </Link>
    </div>
  );
};

export default Services;
