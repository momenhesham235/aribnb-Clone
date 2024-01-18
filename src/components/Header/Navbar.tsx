import { GlobeAltIcon, MenuIcon, UserCircleIcon } from "@heroicons/react/solid";

export const Navbar = () => {
  return (
    <nav className="flex items-center space-x-10 text-gray-500   lg:place-content-end ">
      <div className="flex justify-center items-center space-x-2 border-2 p-2 rounded-full hover:bg-gray-100 duration-300">
        <p className="hidden md:inline cursor-pointer">Become a Host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
      </div>
      <div className="flex justify-center items-center space-x-2 border-2 p-2 rounded-full hover:bg-gray-100 duration-300">
        <MenuIcon className="h-6 cursor-pointer" />
        <UserCircleIcon className="h-6 cursor-pointer" />
      </div>
    </nav>
  );
};
