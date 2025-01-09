// import ChangeBackgroundColorTask from "./components/ChangeBackgroundColorTask";
import { useState } from "react";
export default function App() {
  const [color, setColor] = useState<string>("");
  // const [number, setNumber] = useState<string>(0);

  const getCurrentTab = async () => {
    let [tab] = await chrome.tabs.query({ active: true });
    console.log(tab)
    chrome.scripting.executeScript<string[], void>({
      target: { tabId: tab.id! },
      args: [color],
      func: (color) => {
        document.body.style.backgroundColor = color;
      },
    });
  };

  return (
    <>
      <div className="my-10 w-[300px] h-[400px]">
        <button onClick={getCurrentTab}>check Current Tab</button>
      </div>
      <input
        type="color"
        className="w-full h-[100px]"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      {/* <ChangeBackgroundColorTask handleColorChange={(e: any) => setColor(e.target.value)} color={""} /> */}
    </>
  );
}
