interface colorTypes {
  handleColorChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => React.SetStateAction<void>;
  color: string;
}
const InputToChangeColor = ({ handleColorChange, color }: colorTypes) => {
  return (
    <div className="w-full space-y-5">
      <h1 className="text-center text-md uppercase font-bold mt-5">
        change current tab color
      </h1>
      <input
        type="color"
        value={color}
        onChange={handleColorChange}
        name="color"
        className="w-full h-12 m-auto border"
      />
    </div>
  );
};

export default InputToChangeColor;
