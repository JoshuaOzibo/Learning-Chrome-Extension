import InputToChangeColor from "./components/InputToChangeColor";
import { useState } from "react";
export default function App() {
  const [color, setColor] = useState<string>("");

  const getCurrentTab = async () => {
    let [tab] = await chrome.tabs.query({ active: true });
    console.log(tab);
    chrome.scripting.executeScript<string[], void>({
      target: { tabId: tab.id! },
      args: [color],
      func: (color) => {
        document.body.style.backgroundColor = color;
      },
    });
  };

  return (
    <div className="w-80 h-96 p-5 border-2 rounded-md">
      <InputToChangeColor
        handleColorChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setColor(e.target.value)
        }
        color={color}
      />
      <div className=" w-full flex my-5 justify-center">
        <button
          className="px-5 border bg-black font-medium text-white rounded-md py-3"
          onClick={getCurrentTab}
        >
          Accept Color
        </button>
      </div>
    </div>
  );
}
