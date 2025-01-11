import { useTheme } from "../Context/themeContext";
import ToggleTheme from "./toggleTheme";

function TopBar() {
  return (
    <nav className="flex items-center justify-between gap-2 m-0 pr-6 pt-6 pl-6">
      <img
        src="https://cdn.shopify.com/s/files/1/0911/1420/9592/files/logo.svg?v=1736039240"
        alt="Book Pic"
        className="mr-10 pr-4"
      />
      <button className="flex gap-2 border-r-2 border-light-gray">
        <h1 className="font-sans text-sm">Sans Sarif</h1>
        <img
          src="https://cdn.shopify.com/s/files/1/0911/1420/9592/files/icon-arrow-down.svg?v=1736039240"
          alt="Arrow pointing down"
          className="pr-2"
        />
      </button>
      <div className="flex gap-3">
        <ToggleTheme />
        <img
          className="text-purple"
          src="https://cdn.shopify.com/s/files/1/0911/1420/9592/files/icon-moon.svg?v=1736039240"
          alt="cresent moon"
        />
      </div>
    </nav>
  );
}

export default TopBar;
