import React from "react";
import { User, Search, ShoppingCart, Menu } from "lucide-react";
import ImageSlider from "../components/ImageSlider";

const Header = () => {
  return (
    <header>
      <div
        id="appbar-container"
        className="p-4 flex flex-row justify-between items-center"
      >
        <div>
          <h3
            className="font-bold text-xl"
            style={{ fontFamily: "montserrat" }}
          >
            Bandage
          </h3>
        </div>
        <div className="flex gap-4">
          <User />
          <Search />
          <ShoppingCart />
          <Menu />
        </div>
      </div>
      <div id="navbar-container" className="p-4">
        <nav className="flex flex-col justify-center text-center gap-6 px-4 py-8">
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
      {/* slider */}
      <ImageSlider />
    </header>
  );
};

export default Header;
