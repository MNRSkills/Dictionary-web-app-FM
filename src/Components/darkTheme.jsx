import { useTheme } from "../Context/themeContext";

function ToggleTheme() {
  const { darkTheme, darkThemeToggle } = useTheme();
  return (
    <label
      htmlFor="check"
      className="relative w-[71.993px] h-5 inline-flex items-center cursor-pointer rounded-full bg-gray-200"
    >
      <input
        type="checkbox"
        checked={darkTheme}
        onChange={darkThemeToggle}
        className=" peer absolute"
      />
      <div
        className="absolute -top-[1px] left-[2px] h-5 w-5 bg-white border border-gray-300
          rounded-full transition-all peer-checked:translate-x-5 peer-checked:border-white"
      ></div>
      {/* <div
        className="w-11 h-6 bg-gray-200 rounded-full peer-focus:ring-2 peer-focus:ring-blue-500
        peer-checked:bg-blue-600"
      >
      </div> */}

      {/* <img
        src="https://cdn.shopify.com/s/files/1/0911/1420/9592/files/icon-moon.svg?v=1736039240"
        alt="cresent moon"
      /> */}
    </label>
  );
}

export default ToggleTheme;
