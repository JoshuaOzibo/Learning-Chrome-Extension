import { useState } from "react";
import InputToChangeColor from "../components/InputToChangeColor";
import { getCurrentTab } from "../components/backgroundColorFunction";

const BackgroundColorUi = () => {
  const [color, setColor] = useState<string>("");
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
          onClick={() => getCurrentTab({ color })}
        >
          Accept Color
        </button>
      </div>
    </div>
  );
};

export default BackgroundColorUi;
