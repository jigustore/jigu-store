import { _serviceCatEntry } from "@/lib/data/_serviceCat";
import CommingSoon from "../components/CommingSoon";
import Link from "next/link";
import { CiCircleInfo, CiStar } from "react-icons/ci";

interface IServiceCatItem {
  title: string;
  imgURL?: string;
  descriptions?: string;
  status?: string; // if false, then comming soon
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
  status,
}: IServiceCatItem) => {
  return (
    <div
      className="relative min-w-56 w-full h-full md:max-w-sm min-h-56 flex flex-col rounded-xl shadow-sm overflow-hidden
     border border-theme-gray/10 hover:border-theme-gray/50 hover:shadow-xl duration-300"
    >
      <img
        src={imgURL}
        alt={title}
        className="w-full max-h-56 object-contain hover:scale-105 duration-300"
      />
      <div className="p-2 h-full flex flex-col justify-between gap-2">
        <h2 className="font-bold">{title}</h2>
        <p className="text-theme-black-alt text-vs text-justify font-light -mb-2">
          {descriptions ? descriptions : "For More Info"}
        </p>
        <span
          className={`animate-pulse text-left font-bold text-vs ${!status ? "text-red-500" : "text-green-500"}`}
        >
          {status || "Not Available"}
        </span>
        <Link
          href={`https://wa.me/+9779868053067?text=I am interested in ${title}`}
          className="bg-theme-alt/80 hover:bg-theme text-theme-w p-1 px-2 font-semibold rounded-md"
        >
          <CiCircleInfo className="inline-block mr-2" />
          Enquire now
        </Link>
      </div>
    </div>
  );
};

export default Services;
