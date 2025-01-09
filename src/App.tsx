import ChangeBackgroundColourTask from "./components/InputToChangeColour";
import { useState } from "react";
export default function App() {
  const [colour, setColour] = useState<string>("");

  const getCurrentTab = async () => {
    let [tab] = await chrome.tabs.query({ active: true });
    console.log(tab);
    chrome.scripting.executeScript<string[], void>({
      target: { tabId: tab.id! },
      args: [colour],
      func: (colour) => {
        document.body.style.backgroundColor = colour;
      },
    });
  };

  return (
    <div className="w-80 h-96 p-5 border-2 rounded-md">
      <ChangeBackgroundColourTask
        handleColourChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setColour(e.target.value)
        }
        colour={colour}
      />
      <div className=" w-full flex my-5 justify-center">
        <button
          className="px-5 border bg-black font-medium text-white rounded-md py-3"
          onClick={getCurrentTab}
        >
          Accept Colour
        </button>
      </div>
    </div>
  );
}
