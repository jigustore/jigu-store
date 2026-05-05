import { MdMiscellaneousServices } from "react-icons/md";

interface ICommingSoon {
  oClassName?: string;
  children?: any;
}

const CommingSoon = ({ oClassName, children }: ICommingSoon) => {
  return (
    <div
      className={`w-full flex flex-col justify-center items-center gap-5 p-10 ${oClassName ? oClassName : ""}`}
    >
      <MdMiscellaneousServices className="text-theme text-5xl animate-pulse" />
      {children ? (
        children
      ) : (
        <span className="font-bold">Update Comming Soon!!</span>
      )}
    </div>
  );
};

export default CommingSoon;
