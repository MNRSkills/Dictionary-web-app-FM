import { useTheme } from "../Context/themeContext";

function ToggleTheme() {
  const { darkTheme, darkThemeToggle } = useTheme();
  return (
    <label htmlFor="checkbox" className="relative  cursor-pointer w-11 h-5 bg-purple rounded-full">
      <input
        id="checkbox"
        type="checkbox"
        checked={darkTheme}
        onChange={darkThemeToggle}
        className="sr-only peer"
      />
      <div
        className="absolute top-[2px] left-[2px] h-4 w-4 bg-white border border-gray-300
          rounded-full transition-all peer-checked:translate-x-5 peer-checked:border-white"
      ></div>
      {/* <div
        className="w-11 h-6 bg-gray-200 rounded-full peer-focus:ring-2 peer-focus:ring-blue-500
        peer-checked:bg-blue-600"
      >
      </div> */}

      
    </label>
  );
}

export default ToggleTheme;
