import "./App.css";
import Button from "./components/atom/typography/button/Button";
import Typography from "./components/atom/typography/Typography";
import viteLogo from "/vite.svg";

function App() {
  const handleOnClick = () => {
    alert("Clicked!");
  };

  return (
    <>
      <Typography
        text="Button component with icon at right side"
        classes="mb-5"
      />
      <Button
        type="button"
        classes="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded cursor-pointer"
        onClick={handleOnClick}
        autoFocus
      >
        Subscribe Web Diary
        <img src={viteLogo} className="w-5 h-5" alt="Vite Logo" />
      </Button>

      <hr className="my-5" />

      <Typography
        text="Button component with icon at left side"
        classes="mb-5"
      />
      <Button
        type="button"
        classes="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded cursor-pointer"
        disabled
        autoFocus
      >
        <img src={viteLogo} className="w-5 h-5" alt="Vite Logo" />
        Subscribe Web Diary
      </Button>

      <hr className="my-5" />

      <Typography
        text="Button component with different backround color"
        classes="mb-5"
      />
      <Button
        type="submit"
        className="bg-indigo-400 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded cursor-pointer"
      >
        Make payment
      </Button>

      <hr className="my-5" />

      <Typography text="Button component with only icon" classes="mb-5" />
      <Button
        type="button"
        classes="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded cursor-pointer"
      >
        <img src={viteLogo} className="w-5 h-5" alt="Vite Logo" />
      </Button>
    </>
  );
}

export default App;
