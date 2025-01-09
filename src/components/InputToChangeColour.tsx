interface colourTypes {
  handleColourChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => React.SetStateAction<void>;
  colour: string;
}
const ChangeBackgroundColourTask = ({
  handleColourChange,
  colour,
}: colourTypes) => {
  return (
    <div className="w-full space-y-5">
      <h1 className="text-center text-md uppercase font-bold mt-5">
        change current tab colour
      </h1>
      <input
        type="colour"
        value={colour}
        onChange={handleColourChange}
        name="colour"
        className="w-full h-12 m-auto border"
      />
    </div>
  );
};

export default ChangeBackgroundColourTask;
