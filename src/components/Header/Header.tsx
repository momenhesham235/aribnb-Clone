import { logo } from "@/Utils/constants/imageSrc";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBar from "@/components/Header/SearchBar";
import { Navbar } from "@/components/Header/Navbar";

const Header = () => {
  return (
    <header className="sticky w-full bg-white z-50 shadow-md top-0 right-0 backdrop-blur-md">
      <div className="container grid grid-cols-2 lg:grid-cols-3 items-center">
        <Link href="/">
          <Image
            src={logo}
            alt="airbnb logo"
            width={200}
            height={50}
            className="object-cover cursor-pointer"
          />
        </Link>
        <SearchBar />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
