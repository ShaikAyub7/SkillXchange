import Image from "next/image";
import Link from "next/link";

const NavList = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "about",
    href: "/about",
  },
  {
    name: "document",
    href: "/",
  },
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-around p-6 bg-[#C9BEFF] shadow-md text-gray-700">
      <div className="font-extrabold">SkillXChange</div>

      <div>
        <ul className="flex items-center justify-between gap-4">
          {NavList.map((item) => {
            return (
              <Link href={item.href} key={item.name} className="font-bold">
                {item.name}
              </Link>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
