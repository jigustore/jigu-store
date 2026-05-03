import { MdMiscellaneousServices } from "react-icons/md";

const CommingSoon = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-5 p-10">
      <MdMiscellaneousServices className="text-theme text-5xl animate-pulse" />
      <span className="font-bold">Update Comming Soon!!</span>
    </div>
  );
};

export default CommingSoon;
