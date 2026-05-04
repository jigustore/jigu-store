import { _serviceCatEntry } from "@/lib/data/_serviceCat";
import CommingSoon from "../components/CommingSoon";
import Link from "next/link";

interface IServiceCatItem {
  title: string;
  imgURL?: string;
  descriptions?: string;
}

interface IServiceCat {
  title: string;
  items?: IServiceCatItem[];
}

const Services = () => {
  return (
    <div className="w-full">
      <h1>Services</h1>
      <section className="w-full flex flex-col justify-evenly items-center gap-6 my-10">
        {_serviceCatEntry.map((sce, ind) => {
          return <ServiceCat key={ind} {...sce} />;
        })}
      </section>

      <CommingSoon />
    </div>
  );
};

const ServiceCat = ({ title, items }: IServiceCat) => {
  return (
    <div className="w-full my-2">
      <h2 className="font-extrabold uppercase text-theme underline mb-3 text-xl">
        {title}
      </h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 px-10">
        {items?.map((scei, ind) => {
          return <ServiceCatItem key={ind} {...scei} />;
        })}
      </div>
    </div>
  );
};

const ServiceCatItem = ({ title, imgURL, descriptions }: IServiceCatItem) => {
  return (
    <div className="flex flex-col justify-evenly min-w-56 min-h-56 rounded-xl border border-theme/50 hover:border-theme shadow-md p-2 hover:bg-theme-w-alt duration-300 gap-4">
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
        href={`/services/${title}`}
        className="bg-theme-alt/80 hover:bg-theme text-theme-w p-1 font-semibold rounded-md"
      >
        Enquire now
      </Link>
    </div>
  );
};

export default Services;
