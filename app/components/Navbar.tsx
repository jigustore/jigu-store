import Link from "next/link";

interface INavItem {
    label: string;
    url: string;
};

const _navItems = [
    {
        label: "Home",
        url: "/"
    },
    {
        label: "About",
        url: "/about"
    },
    {
        label: "Contact",
        url: "/contact"
    }
];

const Navbar = () => {
  return (
    <nav className="p-2 px-6 gap-10 w-full flex flex-row justify-between items-center">
      <Link href={"/"} className="text-theme font-bold ">
        Jigustore
      </Link>
      <div className="flex flex-row gap-2">
        {
            _navItems.map((ni, ind) => {
                return <NavItem key={ind} {...ni} />
            })
        }
      </div>
    </nav>
  );
};

const NavItem = ({label, url}: INavItem) => {
    return (
        <Link href={url} className="hover:text-theme font-semibold">{label}</Link>
    )
}

export default Navbar;
