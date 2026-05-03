import CommingSoon from "../components/CommingSoon";

const Services = () => {
  return (
    <div>
      <h1>Services</h1>
      <ServiceCat />
      <CommingSoon />
    </div>
  );
};

const ServiceCat = () => {
  return (
    <section className="w-full flex flex-row justify-evenly items-center gap-5 my-10">
      <div className="bg-theme/20 rounded-xl p-4 ">
        <h2 className="font-bold mb-2">Hardware</h2>
        <ol className="list-item">
          <li>Vending Machine</li>
          <li>Sanitory Machine</li>
        </ol>
      </div>
      <div className="bg-theme/20 rounded-xl p-4 ">
        <h2 className="font-bold mb-2">Software</h2>
        <ol className="list-disc">
          <li>ArdiunoIDE/Program</li>
          <li>ArdiunoIDE/Program</li>
        </ol>
      </div>
    </section>
  );
};

export default Services;
