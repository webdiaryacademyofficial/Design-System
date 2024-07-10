import "./App.css";
import Button from "./components/atom/typography/button/Button";
import Typography from "./components/atom/typography/Typography";
import viteLogo from "/vite.svg";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const handleOnClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  };

  console.log(isLoading);

  return (
    <>
      <Typography
        text="Button Components"
        classes="mb-8 text-[30px] font-bold"
      />

      <Typography text="Button with icon at right side" classes="mb-5" />
      <Button
        variant="secondary"
        variantType="outline"
        type="button"
        classes="web-dairy"
        onClick={handleOnClick}
      >
        Subscribe Web Diary
        <img src={viteLogo} className="w-5 h-5" alt="Vite Logo" />
      </Button>

      <hr className="mt-10 mb-5" />

      {/* wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww */}

      <Typography text="Button with icon at left side" classes="mb-5" />
      <Button
        type="button"
        classes="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded cursor-pointer"
        disabled
        autoFocus
      >
        <img src={viteLogo} className="w-5 h-5" alt="Vite Logo" />
        Subscribe Web Diary
      </Button>

      <hr className="mt-10 mb-5" />

      {/* wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww */}

      <Typography
        text="Button with different background color"
        classes="mb-5"
      />
      <Button
        type="submit"
        variant="tertiary"
        variantType="filled"
        isLoading={isLoading}
        onClick={handleOnClick}
      >
        Make payment
      </Button>

      <hr className="mt-10 mb-5" />

      {/* wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww */}

      <Typography text="Button with only icon" classes="mb-5" />
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
