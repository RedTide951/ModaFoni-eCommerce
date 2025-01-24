import React from "react";
import { User, Search, ShoppingCart, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="lg:flex lg:justify-between lg:items-center lg:gap-4 lg:p-2">
      <div
        id="appbar-container"
        className="p-4 flex flex-row justify-between items-center"
      >
        <div>
          <h3
            className="font-bold text-xl lg:text-2xl"
            style={{ fontFamily: "montserrat" }}
          >
            Bandage
          </h3>
        </div>
        <div name="header-icons" className="flex gap-4 lg:hidden">
          <User />
          <Search />
          <ShoppingCart />
          <Menu />
        </div>
      </div>
      <div
        id="navbar-container"
        className="p-4 lg:flex lg:justify-between lg:items-center lg:gap-4"
      >
        <nav className="flex flex-col justify-center text-center gap-6 px-4 py-8 lg:flex-row lg:py-0">
          <a className="text-secondaryTextColor text-xl" href="">
            Home
          </a>
          <a className="text-secondaryTextColor text-xl font-semibold" href="">
            Product
          </a>
          <a className="text-secondaryTextColor text-xl font-semibold" href="">
            Pricing
          </a>
          <a className="text-secondaryTextColor text-xl font-semibold" href="">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
