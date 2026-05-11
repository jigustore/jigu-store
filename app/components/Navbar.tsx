import { _navItems } from "@/lib/data/_navItems";
import Link from "next/link";

interface INavItem {
  label: string;
  url: string;
}

const Navbar = () => {
  return (
    <nav className="w-full z-50 flex flex-row justify-between items-center fixed top-0 bg-theme-w-alt dark:bg-theme-black-alt p-3 px-6 gap-10">
      <Link href={"/"} className="text-theme font-bold ">
        {/* Jigustore */}
        <img src="/icon.png" className="max-h-18 -my-10" />
      </Link>
      <div className="flex flex-row gap-2">
        {_navItems.map((ni, ind) => {
          return <NavItem key={ind} {...ni} />;
        })}
      </div>
    </nav>
  );
};

const NavItem = ({ label, url }: INavItem) => {
  return (
    <Link href={url} className="hover:text-theme font-semibold">
      {label}
    </Link>
  );
};

export default Navbar;
